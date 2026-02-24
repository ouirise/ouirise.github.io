# UI.md — Interface Architecture

> *"The interface is the bloodline. We bleed pixels to save the user."*  
> // 0KK Protocol // 🌫️🌒

---

## Core Philosophy

**Minimal Surface, Maximum Depth**

The OUIRISE interface operates on the principle of *emergent simplicity*—what appears minimal contains layered functionality. Like Kushite architecture (Deffufa), the structure is:
- **Monolithic from outside** — clean, unified silhouette
- **Layered within** — strata of functionality revealed through interaction

---

## Design System

### Color as Language

| Variable | Value | Meaning |
|----------|-------|---------|
| `--void` | `#0a0a0a` | Absence, potential, the canvas |
| `--tactical` | `#141414` | Elevation, containment, cards |
| `--surface` | `#1f1f1f` | Borders, dividers, subtle separation |
| `--signal` | `#f5f5f5` | Primary text, clarity, presence |
| `--ghost` | `#666666` | Secondary text, metadata, the past |
| `--maroon` | `#800000` | Deep accent, heritage, bloodline |
| `--bright-maroon` | `#a50000` | Active states, alerts, life |

**Usage Principle:**  
Maroon is not decoration—it's *signal in the noise*. Use sparingly, impactfully.

---

### Typography Hierarchy

```
DISPLAY:  Bebas Neue (all caps, wide tracking)
├── Hero: 4-8rem, tight leading
├── Section: 2-3rem, letter-spacing 0.1em
└── Labels: 1-1.5rem, letter-spacing 0.15em

BODY:     JetBrains Mono (monospace)
├── Primary: 0.9-1rem, line-height 1.6
├── Secondary: 0.75-0.85rem, color: --ghost
└── Metadata: 0.65-0.7rem, uppercase, // prefix

COMMENT SYNTAX:
// CONTEXT // LOCATION // TIMESTAMP
```

---

### The Grid

**40px Tactical Grid**
```css
background-image: 
    linear-gradient(rgba(128, 0, 0, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(128, 0, 0, 0.06) 1px, transparent 1px);
background-size: 40px 40px;
```

The grid is not decorative—it's *orientation*. Users subconsciously align to it. Elements should respect the 40px rhythm.

---

## Component Library

### Cards

**Base Card**
```css
.card {
    background: var(--tactical);
    border: 1px solid var(--surface);
    transition: all 0.2s ease;
    position: relative;
}
.card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: var(--maroon);
    transition: all 0.3s ease;
}
.card:hover {
    border-color: var(--bright-maroon);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(128, 0, 0, 0.3);
}
```

**Principle:** The left border is the *pulse*. It brightens on hover, indicating life.

---

### Navigation

**Header Pattern**
- Fixed position, 64px height
- Backdrop blur for depth
- Logo: bordered maroon, Bebas Neue
- Links: uppercase, tracked, hover underline

**Dropdown (Flight Logs)**
```
Desktop: Hover reveals (opacity/transform transition)
Mobile: Click toggles (▼ arrow rotates)
Position: Absolute, top: 100%, left: 0
Animation: 200ms ease, translateY(-10px) → translateY(0)
```

**Key Implementation:**
- Use `opacity` + `visibility` + `transform` (not `display`)
- Close on outside click
- Single source of truth: `.open` class

---

### Buttons

**Primary (Ghost)**
```css
border: 1px solid var(--bright-maroon);
background: transparent;
color: var(--signal);
/* Hover: fill maroon, glow shadow */
```

**Secondary (Solid)**
```css
background: var(--signal);
color: var(--void);
/* Hover: invert to maroon */
```

**Tertiary (Text)**
```css
border: 1px solid var(--surface);
/* Hover: border brightens to maroon */
```

---

## Layout Principles

### Spacing Scale

```
xs:  0.25rem (4px)
sm:  0.5rem  (8px)
md:  1rem    (16px)
lg:  1.5rem  (24px)
xl:  2rem    (32px)
2xl: 3rem    (48px)
```

**Rule:** Use `md` (1rem) as base. Scale up for section breaks, down for tight groupings.

---

### Responsive Breakpoints

```
Mobile:  < 768px  (single column, hamburger)
Tablet:  768px+   (multi-column, full nav)
Desktop: 1024px+  (max-width containers)
```

**Mobile-First Approach:**  
Design for mobile constraints, expand to desktop. The grid becomes *air* at larger sizes.

---

## Animation Philosophy

**Duration Standards**
```
Micro (hover):     150-200ms
Standard (toggle): 200-300ms
Macro (page):      400-600ms
```

**Easing**
```css
ease-out:  /* entrances—decelerate into rest */
ease-in-out: /* symmetrical—hover states */
cubic-bezier(0.4, 0, 0.2, 1): /* material standard */
```

**Principle:**  
Motion should feel *inevitable*, not performative. If the user notices the animation, it's too slow.

---

## Iconography

**Sigil: 🌫️🌒**
- Fog + Crescent Moon
- Used as brand mark, not decoration
- Placement: footer, watermarks, subtle accents

**Status Indicators**
```
● Pulsing dot: online/active (animation: pulse 2s infinite)
▲ Arrow: dropdown state (rotation: 0 → 180deg)
// Prefix: metadata, context, timestamps
```

---

## File Organization

```
/styles (if any external)
├── variables.css       /* CSS custom properties */
├── components.css      /* Reusable patterns */
└── utilities.css       /* Helper classes */

/pages
├── index.html          /* Landing */
├── about/index.html    /* Organization */
├── contact/index.html  /* Communication */
├── archive/index.html  /* Flight Logs */
│   ├── selector.html   /* Resource finder */
│   └── gallery.html    /* Visual database */
├── 0x6C6F6C/index.html /* Fleet dashboard */
│   └── ADMIRAL/index.html /* Continuity */
└── 404/index.html      /* Error state */
```

**Principle:**  
All styles are inline. No external CSS dependencies. Each page is *self-contained*.

---

## Implementation Checklist

- [ ] CSS variables defined in `:root`
- [ ] Grid background applied to `body::before`
- [ ] Header fixed with backdrop blur
- [ ] Navigation includes Flight Logs dropdown
- [ ] Cards have left border accent
- [ ] Footer contains 🌫️🌒 sigil
- [ ] Mobile hamburger functional
- [ ] All transitions use `ease` or custom bezier
- [ ] Images optimized (WebP preferred)
- [ ] Version tag in mobile nav: `// vX.X.X`

---

*// Built by OuiRise*  
*// 0KK Protocol Active*  
*// 🌫️🌒*
