# OUIRISE Initiative - Agent Documentation

> **Organization**: OUIRISE Initiative  
> **Domain**: ouirise.github.io  
> **Established**: 2025  
> **Location**: CLT (Charlotte, NC)  
> **Version**: v2.6.7  

---

## 1. Project Overview

OUIRISE Initiative is a **Black-owned technical consulting organization** that builds data-sovereign systems without vendor lock-in. The website is a static multi-page application deployed on GitHub Pages, featuring a distinctive dark tactical aesthetic inspired by streetwear culture combined with enterprise-grade technical credibility.

The site merges three conceptual entities:
- **OuiRise Initiative** - Tech/engineering consulting
- **Our Style** - Tactical streetwear aesthetic and systems thinking
- **Xavier Austin Group** - Executive leadership and organizational transformation

### Core Philosophy
- "Infrastructure without extraction"
- "Built for endurance. Field-tested in CLT."
- No vendor lock-in, no surveillance architecture, no proprietary black boxes

---

## 2. Technology Stack

### Main Site (Production)
| Layer | Technology |
|-------|------------|
| **Framework** | Pure HTML5 (no JavaScript framework) |
| **Styling** | Tailwind CSS via CDN + Custom CSS variables |
| **Fonts** | JetBrains Mono (monospace), Bebas Neue (display), Inter (body) |
| **Hosting** | GitHub Pages |
| **Build Process** | None - static files deployed directly |

### Archive/Vault (Code Samples)
The `archive/vault/` directory contains sample implementations demonstrating tech stack capabilities:

| Sample | Stack | Purpose |
|--------|-------|---------|
| `next/` | Next.js 16 + React 19 + TypeScript + Tailwind 4 | Modern React SPA architecture |
| `express/` | Node.js + Express + MongoDB | Backend API with database integration |
| `flask/` | Python + Flask | Lightweight Python web service |

---

## 3. Project Structure

```
/
├── index.html                  # Landing page (Hero, Deployments, Services, Origin)
├── sitemap.xml                 # SEO sitemap
├── filetree.json               # Generated directory tree
├── README.md                   # Product Requirements Document (PRD)
│
├── about/                      # Organization info
│   └── index.html              # Mission, capacity stats, team, engagement model
│
├── contact/                    # Contact page
│   └── index.html              # Contact form, direct lines, availability
│
├── archive/                    # Archive section
│   ├── index.html              # Vault animation unlock page
│   └── vault/                  # Code samples and experiments
│       ├── next/               # Next.js sample project
│       ├── express/            # Express.js sample project
│       └── flask/              # Flask sample project
│
├── 0x6C6F6C/                   # Agent fleet documentation (hex for "lol")
│   ├── index.html              # Agent systems fleet dashboard
│   ├── SCAN.md                 # OSINT and reconnaissance docs
│   ├── SPA.md                  # Single Page Application specs
│   ├── moves/                  # Strategy and documentation
│   │   ├── ART.md
│   │   ├── ARTSCI.md
│   │   ├── CULTURESCAN.md
│   │   ├── INSPIRE.md
│   │   ├── LANG.md
│   │   ├── NAV.md
│   │   └── SKILLCREATOR.md
│   ├── positions/              # Role definitions
│   │   ├── 0.md
│   │   ├── B4D2.md
│   │   ├── CONTRACTS.md
│   │   └── FLEET.md
│   └── shards/                 # License and skills
│       ├── LISCENCE.txt
│       └── SKILLS.md
│
├── 404/                        # Custom error page
│   └── index.html              # "Access Denied" themed 404
│
├── portal/                     # Reserved directory (empty)
│
└── images/                     # Static image assets
    ├── ouirise.webp            # Organization logo
    └── *.jpg, *.png            # Various project images
```

---

## 4. Design System

### Color Palette
```css
--void: #0a0a0a;           /* True black - primary background */
--tactical: #141414;       /* Elevated cards, secondary background */
--surface: #1f1f1f;        /* Borders, dividers */
--signal: #f5f5f5;         /* Primary text (off-white) */
--ghost: #666666;          /* Muted text, secondary content */
--maroon: #800000;         /* Dark accent */
--bright-maroon: #a50000;  /* Primary accent color */
```

### Typography
- **Headers**: Bebas Neue (sans-serif, all caps, wide tracking)
- **Body/UI**: JetBrains Mono (monospace)
- **Comments/Metadata**: JetBrains Mono small caps with "//" prefix

### Visual Elements
- **Grid Background**: 40px maroon tactical grid overlay (`rgba(128, 0, 0, 0.06)`)
- **Grain Texture**: SVG noise filter at 3% opacity
- **Card Style**: 1px border `#1f1f1f`, hover brightens to maroon
- **Buttons**: Transparent with border, solid fill on hover
- **Navigation**: Fixed header, 60px height, mobile hamburger menu

### Signature Elements
- Glyph: `🌫️🌒` (Fog + Crescent Moon) - organization sigil
- Comments: `// EST. 2025 // CLT // [CONTEXT]`
- Status indicators: Pulsing maroon dot
- Version tags: `// v2.6.7`

---

## 5. Page Specifications

### Common Components (All Pages)

#### Header
```html
<header class="fixed top-0 w-full z-50 bg-void/95 backdrop-blur-md border-b border-[#1a1a1a]">
```
- Logo: "OUIRISE" in Bebas Neue with maroon border
- Nav: Home, About, Archive, 0x6C6F6C, Contact
- Mobile: Hamburger menu with CSS-only toggle (`#nav-toggle` checkbox)

#### Footer
- Left: OUIRISE logo
- Right: `🌫️🌒 2026 // ALL WAYS` + "Technical Organization // OUI"

### Landing Page (`/`)
1. **Hero** - "ACCESS GRANTED" with lock icon animation
2. **About Section** - Organization identity and research areas
3. **Deployments** - 3 project cards (Rise Integration, Data Bridge, Business Automations)
4. **Services** - 3-tier pricing (Prototype $200, MVP Popular, Enterprise $10k+)
5. **Origin** - "Field-Tested for Black Owned Business" + "Battle-Tested for Fortune 500"

### About Page (`/about/`)
- Hero: "INFRASTRUCTURE WITHOUT EXTRACTION"
- Mission statement
- Capacity stats (06 years, 24 projects, $0 lock-in, 99.9% uptime)
- Team cards (0KK, Kimi-K2.5, The Fog)
- Engagement model (Audit → Build → Transfer)

### Contact Page (`/contact/`)
- Hero: "REQUEST ACCESS"
- Direct contact card (email, phone)
- Location info (Charlotte, NC coordinates)
- Project initiation form

### Archive Page (`/archive/`)
- Vault unlock animation (5-second loading sequence)
- Progress bar with cycling status messages
- Access log reveal after unlock

### 0x6C6F6C Page (`/0x6C6F6C/`)
- Agent fleet dashboard
- 6 agent cards (0KK, Kimi-K2.5, R2B4, CODE-7, R15D2, SII-25)
- Documentation links (FLEET.md, FORGE.md, SCAN.md, etc.)

### 404 Page (`/404/`)
- "Access Denied" themed error page
- Large "404" display with maroon glow
- "Return to Base" button

---

## 6. Development Conventions

### CSS Architecture
All styles are inline in `<style>` tags within each HTML file. No external CSS files.

**Required CSS Variables** (copy to new pages):
```css
:root {
    --void: #0a0a0a;
    --tactical: #141414;
    --surface: #1f1f1f;
    --signal: #f5f5f5;
    --ghost: #666666;
    --maroon: #800000;
    --bright-maroon: #a50000;
}
```

**Standard Background Pattern**:
```css
body::before {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: 
        linear-gradient(rgba(128, 0, 0, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(128, 0, 0, 0.06) 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: -1;
}
```

### Navigation Pattern
```html
<input type="checkbox" id="nav-toggle">
<label for="nav-toggle" class="hamburger-label cursor-pointer md:hidden">...</label>
<nav id="mobile-menu">...</nav>
```

### Card Hover Effect
```css
.card-hover {
    transition: all 0.2s ease;
}
.card-hover:hover {
    border-color: var(--bright-maroon);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(128, 0, 0, 0.3);
}
```

### Responsive Breakpoints
- Mobile: `< 768px` (single column, hamburger menu)
- Tablet/Desktop: `>= 768px` (full nav, multi-column)

### File Naming
- All lowercase for directories
- `index.html` for directory roots
- Hyphen-separated lowercase for multi-word files

---

## 7. Deployment Process

### GitHub Pages Deployment
1. **Source**: Main branch, root directory
2. **URL**: https://ouirise.github.io
3. **No build step required** - HTML files served as-is

### Adding New Pages
1. Create directory: `mkdir newpage`
2. Create file: `newpage/index.html`
3. Copy header/nav/footer template from existing page
4. Update `sitemap.xml` with new URL
5. Commit and push to main branch

### Static Assets
- Images: Place in `/images/` directory
- Reference: `/images/filename.ext`

---

## 8. Content Guidelines

### Writing Style
- No corporate speak
- Use "field-tested" not "proven methodology"
- Use "built for endurance" not "scalable solutions"
- Comments as design: `// Like this`

### Required Page Metadata
Every page should include:
```html
<title>Page Name | OUIRISE INITIATIVE</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

---

## 9. Archive/Vault Development

The `archive/vault/` directory contains sample projects for demonstration purposes. These are NOT deployed to production but serve as code portfolio examples.

### Next.js Sample
```bash
cd archive/vault/next
npm install
npm run dev     # Development server
npm run build   # Production build
```

### Express Sample
```bash
cd archive/vault/express
npm install
node app.js     # Requires .env with MONGODB URI
```

### Flask Sample
```bash
cd archive/vault/flask
pip install -r requirements.txt
python app.py   # Runs on localhost:5000
```

---

## 10. Security Considerations

### Form Handling
- Contact form currently redirects to `/404/` (no backend)
- For production forms, integrate with Formspree, Netlify Forms, or custom API

### Environment Variables
- `.env` files are gitignored
- Sample projects in vault use `.env` for MongoDB URIs (not committed)

### Content Security
- No user-generated content on static pages
- External resources: Google Fonts, Tailwind CDN

---

## 11. Maintenance Notes

### Regular Updates
1. **Sitemap dates** - Update `<lastmod>` when modifying pages
2. **Version number** - Increment in mobile nav footer (`// vX.X.X`)
3. **Year in footer** - Update copyright year if needed

### Performance
- No JavaScript bundling required
- Images should be optimized (WebP preferred)
- Consider lazy loading for below-fold images

### Accessibility
- Semantic HTML5 elements
- `aria-label` attributes for icon-only buttons
- Sufficient color contrast (maroon on black is decorative only)

---

## 12. Agent Context

This project is maintained by a human-AI collaborative team:

| Agent | Role | Focus |
|-------|------|-------|
| 0KK | Principal Architect | Systems design, client relations |
| Kimi-K2.5 | AI Systems Partner | Code generation, rapid prototyping |

**Twin Protocol**: Human-AI collaborative architecture for rapid development.

---

*// Built by OuiRise*  
*// 0KK Protocol Active*  
*// 🌫️🌒*
