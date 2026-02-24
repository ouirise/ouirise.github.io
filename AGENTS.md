# OUIRISE Initiative - Agent Documentation

> **Organization**: OUIRISE Initiative  
> **Domain**: ouirise.github.io  
> **Established**: 2025  
> **Location**: CLT (Charlotte, NC)  
> **Version**: v2.7.1  

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
├── archive/                    # FLIGHT LOGS - Deployment records
│   ├── index.html              # Vault unlock animation + mission archive
│   ├── selector.html           # Flight/resource selector interface
│   ├── gallery.html            # Visual deployment gallery
│   └── vault/                  # Code samples and experiments
│       ├── index.html          # Vault access portal
│       ├── next/               # Next.js sample project
│       │   ├── package.json    # Dependencies: next@16.1.6, react@19.2.3
│       │   ├── next.config.ts  # Next.js configuration
│       │   ├── tsconfig.json   # TypeScript config
│       │   ├── app/            # App router pages
│       │   └── ...
│       ├── express/            # Express.js sample project
│       │   ├── app.js          # Main server file
│       │   ├── .env            # MongoDB URI (gitignored in production)
│       │   └── routes/         # HTML route templates
│       └── flask/              # Flask sample project
│           ├── app.py          # Main application
│           └── requirements.txt # flask, gunicorn
│
├── 0x6C6F6C/                   # Agent fleet documentation (hex for "lol")
│   ├── index.html              # Agent systems fleet dashboard
│   ├── 0x.html                 # Alternate fleet view
│   ├── SPA.md                  # Single Page Application sales kit
│   ├── SCAN.md                 # OSINT and reconnaissance docs
│   ├── notes.txt               # Fleet operational notes
│   ├── ADMIRAL/                # Continuity archive console
│   │   └── index.html          # B4D2 bridge interface
│   ├── moves/                  # Strategy and documentation
│   │   ├── ART.md
│   │   ├── ARTSCI.md
│   │   ├── CULTURESCAN.md
│   │   ├── CYBERCHESS.md       # Fleet wargame protocol
│   │   ├── INSPIRE.md
│   │   ├── LANG.md
│   │   ├── NAV.md
│   │   ├── SKILLCREATOR.md     # Skill creation guidelines
│   │   ├── UI.md
│   │   └── UX.md
│   ├── positions/              # Role definitions
│   │   ├── 0.md
│   │   ├── B4D2.md
│   │   ├── CONTRACTS.md
│   │   └── FLEET.md            # 0KK Model Fleet Registry
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
    ├── image.webp              # Hero background (Kushite pyramids)
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
- Version tags: `// v2.7.1`

---

## 5. Page Specifications

### Common Components (All Pages)

#### Header
```html
<header class="fixed top-0 w-full z-50 bg-void/95 backdrop-blur-md border-b border-[#1a1a1a]">
```
- Logo: "OUIRISE" in Bebas Neue with maroon border
- Nav: Home, About, Flight Logs, 0x6C6F6C, Contact
- Mobile: Hamburger menu with CSS-only toggle (`#nav-toggle` checkbox)

#### Footer
- Left: OUIRISE logo
- Right: `🌫️🌒 2026 // ALL WAYS` + "Technical Organization // OUI"

### Landing Page (`/`)
1. **Hero** - "GRANT COMPLIANCE RESCUE" — direct response CTA for 501c3 compliance
   - Headline: "7 DAYS TO FILED + COMPLIANT"
   - Subhead: Overdue 990 pain point messaging
   - CTA: "Fix My Compliance ($2,500/Week)" → mailto:0kk@ouirise.org with pre-filled subject/body
2. **Software Engineers** - 8+ years experience, 4 feature cards
3. **About Section** - Organization identity and research areas
4. **Deployments** - 3 project cards (Rise Integration, Data Bridge, Business Automations)
5. **Agent Fleet CTA** - Link to 0x6C6F6C and ADMIRAL
6. **Services** - 3-tier pricing (Prototype $200, MVP Popular, Enterprise $10k+)
7. **Origin** - "Field-Tested for Black Owned Business" + "Battle-Tested for Fortune 500"

### About Page (`/about/`)
- Hero: "INFRASTRUCTURE WITHOUT EXTRACTION"
- Mission statement
- Capacity stats (06 years, 24 projects, $0 lock-in, 99.9% uptime)
- Team cards (0KK, Kimi-K2.5, The Fog)
- **Professor X Section**: Tina Huang feature — external mentor in data science & AI education
  - Ex-Meta data scientist, MSc UPenn
  - Founder of Lonely Octopus (~1M YouTube subscribers)
  - AI Agent Bootcamp creator
  - Links: YouTube, Lonely Octopus, Bootcamp waitlist
- Engagement model (Audit → Build → Transfer)

### Contact Page (`/contact/`)
- Hero: "REQUEST ACCESS"
- Direct contact card (email, phone)
- Location info (Charlotte, NC coordinates)
- Project initiation form (Formspree integration)

### Archive Page (`/archive/`) — FLIGHT LOGS
- **Rebranded**: "FLIGHT LOGS" (was "Archive")
- Vault unlock animation (5-second loading sequence)
- Progress bar with cycling status messages
- Access log reveal after unlock
- **Flight Statistics**: 24 Flights, 06 Years, 99.9% Uptime
- **Recent Flights**: Production deployments with flight numbers
- **Flight Simulations**: Code vault samples
- **Fleet Operations**: Links to 0x6C6F6C and ADMIRAL
- Flight preview placeholders (ready for iframe insertion)

### Flight Selector (`/archive/selector.html`)
- Resource/channel selector interface
- Search by name, description, or tags
- Tactical card grid with status indicators
- Tag system (CODE, OPS, SEC, EDU, etc.)

### 0x6C6F6C Page (`/0x6C6F6C/`)
- Agent fleet dashboard
- 6 agent cards (0KK, Kimi-K2.5, R2B4, CODE-7, R15D2, SII-25)
- **Positions** section: FLEET.md, CONTRACTS.md, 0.md, B4D2.md
- **Moves** section: All 8 strategy documents
- **Shards** section: SKILLS.md, LISCENCE.txt
- **External Intelligence** section: Allied operators and knowledge sources
  - Tina Huang (Professor X) — Ex-Meta DS, AI educator, Lonely Octopus founder
  - Lonely Octopus — AI Agent Bootcamp platform

### ADMIRAL Console (`/0x6C6F6C/ADMIRAL/`)
- Continuity archive interface
- B4D2 bridge with R2B4 sync
- Memory stream viewer
- Agent card grid
- Terminal window aesthetic

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

## 7. Build and Test Commands

### Main Site
No build process required - static HTML files served directly via GitHub Pages.

### Archive/Vault Samples

#### Next.js Sample
```bash
cd archive/vault/next
npm install
npm run dev      # Development server on localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

**Configuration Files:**
- `package.json`: Dependencies and scripts
- `next.config.ts`: Next.js configuration (TypeScript)
- `tsconfig.json`: TypeScript compiler options
- `eslint.config.mjs`: ESLint configuration
- `postcss.config.mjs`: PostCSS with Tailwind v4

#### Express Sample
```bash
cd archive/vault/express
npm install
node app.js      # Requires .env with MONGODB URI
```

**Dependencies:**
- express
- mongodb
- dotenv

**Configuration:**
- `.env`: MONGODB connection string (not committed)
- Port: 3000 (default)

#### Flask Sample
```bash
cd archive/vault/flask
pip install -r requirements.txt
python app.py    # Runs on localhost:5000
```

**Dependencies:**
- flask
- gunicorn (for production)

---

## 8. Testing Instructions

### Manual Testing Checklist

#### Visual/Layout
- [ ] Maroon tactical grid visible on all pages
- [ ] Grain texture overlay present
- [ ] Typography renders correctly (JetBrains Mono, Bebas Neue)
- [ ] Color contrast meets accessibility standards

#### Navigation
- [ ] All nav links functional
- [ ] Mobile hamburger menu toggles correctly
- [ ] Dropdown menus work on desktop hover
- [ ] Mobile dropdowns expand/collapse

#### Responsive
- [ ] Layout adapts at 768px breakpoint
- [ ] No horizontal scroll on mobile
- [ ] Images scale proportionally
- [ ] Text remains readable at all sizes

#### Interactive Elements
- [ ] Card hover effects work
- [ ] Button hover states functional
- [ ] Form inputs focus correctly
- [ ] Lock icon animation plays on hero

### Performance Testing
- [ ] Lighthouse score >90 on all metrics
- [ ] Page load <2s on 3G connection
- [ ] No render-blocking resources
- [ ] Images optimized (WebP preferred)

---

## 9. Deployment Process

### GitHub Pages Deployment
1. **Source**: Main branch, root directory
2. **URL**: https://ouirise.github.io
3. **No build step required** - HTML files served as-is

### Adding New Pages
1. Create directory: `mkdir newpage`
2. Create file: `newpage/index.html`
3. Copy header/nav/footer template from existing page
4. Update `sitemap.xml` with new URL
5. Update `AGENTS.md` with new page documentation
6. Commit and push to main branch

### Static Assets
- Images: Place in `/images/` directory
- Reference: `/images/filename.ext`

---

## 10. Content Guidelines

### Writing Style
- No corporate speak
- Use "field-tested" not "proven methodology"
- Use "built for endurance" not "scalable solutions"
- Comments as design: `// Like this`
- **Flight Logs terminology**: "Flights" instead of "projects", "Missions" for deployments

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

## 11. Security Considerations

### Form Handling
- Contact form uses Formspree for submission handling
- Form endpoint: `https://formspree.io/f/xnqevwrd`
- For production, verify Formspree account and update endpoint if needed

### Environment Variables
- `.env` files are gitignored
- Sample projects in vault use `.env` for MongoDB URIs (not committed)

### Content Security
- No user-generated content on static pages
- External resources: Google Fonts, Tailwind CDN

---

## 12. Maintenance Notes

### Regular Updates
1. **Sitemap dates** - Update `<lastmod>` when modifying pages
2. **Version number** - Increment in mobile nav footer (`// vX.X.X`)
3. **Year in footer** - Update copyright year if needed
4. **AGENTS.md** - Keep project structure current

### Performance
- No JavaScript bundling required
- Images should be optimized (WebP preferred)
- Consider lazy loading for below-fold images

### Accessibility
- Semantic HTML5 elements
- `aria-label` attributes for icon-only buttons
- Sufficient color contrast (maroon on black is decorative only)

---

## 13. Agent Context

This project is maintained by a human-AI collaborative team:

| Agent | Role | Focus |
|-------|------|-------|
| 0KK | Principal Architect | Systems design, client relations |
| Kimi-K2.5 | AI Systems Partner | Code generation, rapid prototyping |

**Twin Protocol**: Human-AI collaborative architecture for rapid development.

### Fleet Signals
- `bingbong` - Internal signal, no response required
- `俊达` - Confirmation receipt
- `0xSummary.md` - Fleet-wide session logging format

---

*// Built by OuiRise*  
*// 0KK Protocol Active*  
*// 🌫️🌒*
