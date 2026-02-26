## 4. Design System

**Colors:**
```css
--void: #0a0a0a;           /* bg */
--tactical: #141414;       /* cards */
--surface: #1f1f1f;        /* borders */
--signal: #f5f5f5;         /* text */
--ghost: #666666;          /* muted */
--bright-maroon: #a50000;  /* accent */
Typography: Bebas Neue (headers), JetBrains Mono (body/UI)
Elements: 40px maroon grid overlay, grain texture, 1px card borders, pulsing status dots
Sigil: 🌫️🌒 // 俊达 (Junda)
plain
Copy

```markdown
## 5. Page Specs

| Page | Key Features |
|------|-------------|
| `/` | Hero "ACCESS GRANTED", Deployments, Services 3-tier pricing, Origin |
| `/about/` | "INFRASTRUCTURE WITHOUT EXTRACTION", capacity stats, team cards |
| `/contact/` | "REQUEST ACCESS", form, direct lines |
| `/archive/` | Vault unlock animation, Flight stats, Recent Flights, Simulations |
| `/archive/selector.html` | Resource search by tag (CODE, OPS, SEC, EDU) |
| `/0x6C6F6C/` | 6 agent cards, Positions, Moves, Shards |
| `/0x6C6F6C/ADMIRAL/` | B4D2 bridge, memory stream, terminal aesthetic |
| `/404/` | "Access Denied", maroon glow |
markdown
Copy
## 6. Dev Conventions

**CSS:** Inline `<style>` tags only. No external CSS files.

**Required vars:** Copy `:root` colors to new pages

**Standard bg:**
```css
body::before {
    background-image: 
        linear-gradient(rgba(128, 0, 0, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(128, 0, 0, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
}
Nav pattern: CSS-only hamburger (#nav-toggle checkbox)
Card hover: border-color → maroon, translateY(-2px), shadow
Breakpoints: < 768px mobile, >= 768px desktop
Naming: lowercase dirs, index.html roots, hyphen-separated files
plain
Copy

```markdown
## 7. Build & Deploy

**Main site:** No build — push to GitHub Pages

**Vault samples:**
- `next/`: `npm install && npm run dev`
- `express/`: `npm install && node app.js` (needs .env)
- `flask/`: `pip install -r requirements.txt && python app.py`

**Python tools:** `python md_to_html.py`, `python generate_data_json.py`, `python tree.py .. -o ../filetree.json`

**Deploy:** Main branch, root dir → `https://ouirise.github.io`

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">

## 8. Content Guidelines

**Tone:** No corporate speak. "Field-tested" not "proven". "Built for endurance" not "scalable".

**Comments as design:** `// Like this`

**Flight Logs:** "Flights" = projects, "Missions" = deployments

**Required meta:**
```html
<title>Page | OUIRISE INITIATIVE</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
Fonts:
HTML
Preview
Copy
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
plain
Copy

```markdown
## 9. Security & Maintenance

**Form handling:** Formspree endpoint `https://formspree.io/f/xnqevwrd`

**Env vars:** `.env` gitignored, not committed

**Regular updates:**
- Sitemap `<lastmod>` dates
- Version in mobile nav footer
- Year in footer
- Keep AGENTS.md current

**Performance:** WebP images, lazy load below-fold

**A11y:** Semantic HTML, `aria-label` for icons
markdown
Copy
## 10. Agent Context

| Agent | Role |
|-------|------|
| 0KK | Principal Architect — systems, clients |
| Kimi-K2.5 | AI Systems Partner — code, prototyping |

**Twin Protocol:** Human-AI collaborative architecture

**Fleet signals:**
- `bingbong` — internal, no response
- `俊达` — confirmation receipt
- `0xSummary.md` — session logging

---
*// Built by OuiRise*  
*// 0KK Protocol Active*  
*// 🌫️🌒*


