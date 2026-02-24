# MANUAL 501c3 HUNT — CHARLOTTE NC
## Target: 50 Orgs with Compliance Risk

---

## **Source 1: ProPublica Nonprofit Explorer (Primary)**

**URL:** https://projects.propublica.org/nonprofits/search?state=NC&city=Charlotte

### Extraction Steps:
1. Navigate to URL
2. Sort by "Assets" (descending) — bigger orgs = bigger budget
3. Open each org in new tab
4. Extract fields:

```
Org Name: _______________________
EIN: ___________________________
Website: _______________________
Last 990 Filed: ________________ (look for "Last tax filing" date)
Assets: ________________________
Status: ________________________ (Active/Dissolved/Revoked)
Contact: _______________________ (from website contact page)
```

### Risk Indicators (Flag These):
- [ ] Last filing >18 months ago
- [ ] Status: "Revoked" or "Dissolved"
- [ ] No filing for 2+ years
- [ ] Assets >$100K (can afford $2,500)

---

## **Source 2: NC Secretary of State (Validation)**

**URL:** https://www.sosnc.gov/search/index/corp

### Search Parameters:
- **Keyword:** "charlotte" or leave blank
- **Type:** "NPA" (Nonprofit Association)
- **Status:** All (to find revoked/dissolved)

### Red Flags to Capture:
- "Administratively Dissolved"
- "Revoked"
- "Suspended"

---

## **Source 3: IRS Revoked List (High Urgency)**

**URL:** https://www.irs.gov/charities-non-profits/tax-exempt-organizations-revocation-list

### Filter:
- State: NC
- City: Charlotte
- Download CSV, filter by revocation date

---

## **Quick Capture Template (Copy/Paste)**

```
| Org Name | EIN | Website | Last 990 | Assets | Risk | Email |
|----------|-----|---------|----------|--------|------|-------|
|          |     |         |          |        |      |       |
```

---

## **Outreach Priority Queue**

### Tier 1 (Contact First):
- Assets >$500K
- Revoked status
- No filing 2+ years
- Has website with contact form

### Tier 2:
- Assets $100K-$500K
- Filing 12-18 months overdue
- Active status but at risk

### Tier 3:
- Smaller orgs (<$100K)
- Recently dissolved
- May not have budget

---

## **Email Template (Ready to Send)**

```
Subject: 10 Hours Back + Sleep Tonight

[ORG_NAME],

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
```

---

## **Daily Target**

- **Day 1:** Extract 25 orgs from ProPublica
- **Day 2:** Extract 25 more + validate with NC SOS
- **Day 3:** Send 50 personalized emails

---

## **Tracking Sheet Columns**

1. Org Name
2. EIN
3. Website
4. Last 990 Date
5. Assets
6. Compliance Risk (Y/N)
7. Contact Email
8. Email Sent Date
9. Response
10. Status (Cold/Warm/Hot/Closed)

---

*// Hunt begins now. No excuses.*
*// 🌫️🌒*
