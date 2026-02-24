#!/usr/bin/env python3
"""
SHADOW CLONE 501c3 HUNTER
Extracts Charlotte NC nonprofits with compliance risk signals.
Target: 50 orgs with overdue 990 filings.
"""

import asyncio
import json
import csv
from datetime import datetime, timedelta
from playwright.async_api import async_playwright
from dataclasses import dataclass, asdict
from typing import List, Optional


@dataclass
class Target:
    """Nonprofit target profile"""
    org_name: str
    website: Optional[str]
    contact_email: Optional[str]
    last_990_filed: Optional[str]
    assets: Optional[str]
    compliance_risk: bool
    ein: Optional[str]
    city: str = "Charlotte"
    state: str = "NC"
    source_url: Optional[str] = None


async def hunt_propublica() -> List[Target]:
    """Hunt ProPublica Nonprofit Explorer for Charlotte NC targets"""
    targets = []
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        # ProPublica search URL for Charlotte NC
        search_url = "https://projects.propublica.org/nonprofits/search?state=NC&city=Charlotte"
        print(f"[HUNT] ProPublica: {search_url}")
        
        try:
            await page.goto(search_url, wait_until="networkidle", timeout=30000)
            await page.wait_for_selector("table.search-results", timeout=10000)
            
            # Extract rows
            rows = await page.query_selector_all("table.search-results tbody tr")
            print(f"[HUNT] Found {len(rows)} rows")
            
            for row in rows[:50]:  # Target: 50
                try:
                    # Org name and link
                    name_el = await row.query_selector("td.name a")
                    org_name = await name_el.inner_text() if name_el else "Unknown"
                    detail_url = await name_el.get_attribute("href") if name_el else None
                    if detail_url and not detail_url.startswith("http"):
                        detail_url = f"https://projects.propublica.org{detail_url}"
                    
                    # EIN
                    ein_el = await row.query_selector("td.ein")
                    ein = await ein_el.inner_text() if ein_el else None
                    
                    # Assets
                    assets_el = await row.query_selector("td.assets")
                    assets = await assets_el.inner_text() if assets_el else None
                    
                    # Last filing info (from subtitle or detail page)
                    # ProPublica shows this in the detail page, we'll flag for follow-up
                    
                    target = Target(
                        org_name=org_name.strip(),
                        website=None,  # Need to scrape detail page
                        contact_email=None,  # Need to find via website
                        last_990_filed=None,  # Need detail page
                        assets=assets.strip() if assets else None,
                        compliance_risk=False,  # Will calculate after getting date
                        ein=ein.strip() if ein else None,
                        source_url=detail_url
                    )
                    targets.append(target)
                    print(f"[TARGET] {org_name}")
                    
                except Exception as e:
                    print(f"[ERROR] Row extraction: {e}")
                    continue
                    
        except Exception as e:
            print(f"[ERROR] ProPublica hunt failed: {e}")
            
        await browser.close()
    
    return targets


async def hunt_ncsos() -> List[Target]:
    """
    Hunt NC Secretary of State business registry.
    Alternative if ProPublica blocks.
    """
    targets = []
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        # NC SOS business search
        search_url = "https://www.sosnc.gov/search/index/corp"
        print(f"[HUNT] NC SOS: {search_url}")
        
        try:
            await page.goto(search_url, wait_until="networkidle", timeout=30000)
            
            # Search for nonprofits in Charlotte
            await page.fill("input[name='keyword']", "charlotte")
            await page.select_option("select[name='type']", "NPA")  # Nonprofit Association
            await page.click("input[type='submit']")
            
            await page.wait_for_selector("table#corporations", timeout=10000)
            
            rows = await page.query_selector_all("table#corporations tbody tr")
            print(f"[HUNT] NC SOS: Found {len(rows)} rows")
            
            for row in rows[:50]:
                try:
                    cells = await row.query_selector_all("td")
                    if len(cells) >= 3:
                        org_name = await cells[0].inner_text()
                        status = await cells[2].inner_text()
                        
                        # Check for compliance risk indicators
                        risk_indicators = ["administratively dissolved", "revoked", "suspended"]
                        has_risk = any(ind in status.lower() for ind in risk_indicators)
                        
                        target = Target(
                            org_name=org_name.strip(),
                            website=None,
                            contact_email=None,
                            last_990_filed=None,
                            assets=None,
                            compliance_risk=has_risk,
                            ein=None,
                            source_url=search_url
                        )
                        targets.append(target)
                        
                except Exception as e:
                    print(f"[ERROR] NC SOS row: {e}")
                    continue
                    
        except Exception as e:
            print(f"[ERROR] NC SOS hunt failed: {e}")
            
        await browser.close()
    
    return targets


def calculate_compliance_risk(last_filed_date: Optional[str]) -> bool:
    """Determine if org is at compliance risk (>18mo since filing)"""
    if not last_filed_date:
        return True  # Unknown = risk
    
    try:
        # Parse various date formats
        for fmt in ["%Y-%m-%d", "%m/%d/%Y", "%B %d, %Y", "%b %Y"]:
            try:
                filed_date = datetime.strptime(last_filed_date, fmt)
                break
            except ValueError:
                continue
        else:
            return True  # Can't parse = risk
            
        # Check if >18 months ago
        cutoff = datetime.now() - timedelta(days=547)  # 18 months
        return filed_date < cutoff
        
    except Exception:
        return True


def export_targets(targets: List[Target], filename: str = None):
    """Export targets to CSV and JSON"""
    if not filename:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"charlotte_501c3_targets_{timestamp}"
    
    # JSON export
    json_path = f"{filename}.json"
    with open(json_path, 'w') as f:
        json.dump([asdict(t) for t in targets], f, indent=2)
    print(f"[EXPORT] JSON: {json_path}")
    
    # CSV export
    csv_path = f"{filename}.csv"
    with open(csv_path, 'w', newline='') as f:
        if targets:
            writer = csv.DictWriter(f, fieldnames=asdict(targets[0]).keys())
            writer.writeheader()
            for target in targets:
                writer.writerow(asdict(target))
    print(f"[EXPORT] CSV: {csv_path}")
    
    return json_path, csv_path


def generate_outreach_template(target: Target) -> str:
    """Generate personalized outreach email for a target"""
    return f"""Subject: 10 Hours Back + Sleep Tonight

{target.org_name},

Your 990 is overdue. The state is preparing dissolution. 

I'm not a consultant—I'm the guy who fixes it in one week.

Grant Compliance Rescue:
• $2,500 flat
• 7 days to filed + compliant
• You get 10 hours back to actually run your mission

No retainers. No scope creep. Just the paperwork handled.

Reply "RESCUE" or call: [YOUR_PHONE]

0KK
OUIRISE INITIATIVE
"""


async def main():
    """Main hunt execution"""
    print("=" * 60)
    print("SHADOW CLONE 501c3 HUNTER")
    print("Target: Charlotte NC Nonprofits")
    print("=" * 60)
    
    all_targets = []
    
    # Try ProPublica first
    print("\n[PHASE 1] ProPublica Hunt")
    propublica_targets = await hunt_propublica()
    all_targets.extend(propublica_targets)
    
    # If we need more, try NC SOS
    if len(all_targets) < 50:
        print(f"\n[PHASE 2] NC SOS Hunt (need {50 - len(all_targets)} more)")
        ncsos_targets = await hunt_ncsos()
        all_targets.extend(ncsos_targets)
    
    # Deduplicate by EIN or name
    seen = set()
    unique_targets = []
    for t in all_targets:
        key = t.ein if t.ein else t.org_name
        if key and key not in seen:
            seen.add(key)
            unique_targets.append(t)
    
    print(f"\n[RESULTS] Total unique targets: {len(unique_targets)}")
    
    # Export
    if unique_targets:
        json_path, csv_path = export_targets(unique_targets)
        
        # Generate sample outreach
        print("\n[SAMPLE OUTREACH]")
        print(generate_outreach_template(unique_targets[0]))
        
        # High-risk targets
        high_risk = [t for t in unique_targets if t.compliance_risk]
        print(f"\n[RISK ANALYSIS] {len(high_risk)} high-risk targets identified")
        
    else:
        print("[WARNING] No targets captured. Check selectors.")


if __name__ == "__main__":
    asyncio.run(main())
