# UX.md — Experience Architecture

> *"We don't design for users. We design for humans who happen to use systems."*  
> // 0KK Protocol // 🌫️🌒

---

## Core Philosophy

**Deeply Personal, Radically Minimal**

The OUIRISE experience is built on the tension between:
- **Intimacy** — the user feels seen, understood
- **Restraint** — no excess, no extraction

Like the Kushite concept of *Ma'at* (balance), the interface achieves harmony through proportional justice—not equal elements, but *rightly weighted* elements.

---

## User Archetypes

### 1. The Operator (0KK)
**Profile:** Technical founder, systems thinker, values efficiency  
**Needs:** Quick access to tools, clear information hierarchy, no friction  
**Pain Points:** Corporate bloat, surveillance capitalism, vendor lock-in

**Design Response:**
- Command-line aesthetics (mono font, // comments)
- Direct paths to functionality
- No tracking, no cookies, no extraction

---

### 2. The Client (Business Owner)
**Profile:** Non-technical, values trust and clarity  
**Needs:** Understand offerings, feel confident in process, easy contact  
**Pain Points:** Jargon, hidden costs, opaque processes

**Design Response:**
- Plain language ("built for endurance" not "scalable solutions")
- Transparent pricing (Prototype $200, MVP, Enterprise)
- Clear CTAs ("Initiate Project" not "Submit Inquiry")

---

### 3. The Recruit (Developer/Designer)
**Profile:** Technical talent, exploring collaboration  
**Needs:** See tech stack, understand culture, assess fit  
**Pain Points:** Vague job postings, corporate speak, lack of transparency

**Design Response:**
- Open source ethos (GitHub links, vault samples)
- Agent fleet documentation (0x6C6F6C)
- Cultural signals (🌫️🌒, field-tested, CLT)

---

## Journey Maps

### Path A: Discovery → Conversion

```
1. LANDING (Hero)
   └── Trigger: Organic search, referral, direct
   └── Action: Scroll or click CTA
   └── Emotional State: Curious, skeptical

2. EXPLORATION (About/Services)
   └── Trigger: "What is this?"
   └── Action: Read mission, view deployments
   └── Emotional State: Evaluating credibility

3. VALIDATION (Flight Logs/0x6C6F6C)
   └── Trigger: "Can they deliver?"
   └── Action: Browse projects, see agent fleet
   └── Emotional State: Building trust

4. COMMITMENT (Contact)
   └── Trigger: "I want to work with them"
   └── Action: Fill form, initiate project
   └── Emotional State: Ready to engage
```

**Key Transition:**  
The Flight Logs (archive) serves as *social proof*—evidence of capability without bragging.

---

### Path B: Technical Deep Dive

```
1. LANDING
   └── Trigger: Developer referral, GitHub discovery
   └── Action: Immediately navigate to 0x6C6F6C

2. FLEET EXPLORATION
   └── Trigger: "Who are these agents?"
   └── Action: Read positions, moves, shards
   └── Emotional State: Assessing culture fit

3. VAULT ACCESS
   └── Trigger: "Show me the code"
   └── Action: Browse Next.js, Express, Flask samples
   └── Emotional State: Technical validation

4. ENGAGEMENT
   └── Trigger: "This aligns with my values"
   └── Action: Contact, contribute, collaborate
```

**Key Insight:**  
Technical users skip marketing copy. Give them *direct access* to the goods.

---

## Interaction Patterns

### The Lock Icon (Hero)

**Symbolism:** Access, security, exclusivity  
**Animation:** Unlock sequence (rotate, fade in)  
**Psychology:** "You've arrived somewhere special"

**Implementation:**
```css
.lock-icon {
    animation: unlock 1.5s ease-out forwards;
}
@keyframes unlock {
    0% { transform: rotate(0deg); opacity: 0; }
    50% { transform: rotate(-10deg); opacity: 1; }
    100% { transform: rotate(0deg); opacity: 1; }
}
```

---

### The Vault Unlock (Flight Logs)

**Symbolism:** Progress, revelation, access granted  
**Duration:** 5 seconds (enough to build anticipation, not frustration)  
**Psychology:** "Good things require patience"

**States:**
1. `INITIALIZING FOG PROTOCOL...` (0-1s)
2. `DECRYPTING 6.7 KEYS...` (1-2s)
3. `VERIFYING TWIN RESONANCE...` (2-3s)
4. `BYPASSING EXTRACTION...` (3-4s)
5. `ACCESSING FLIGHT LOGS...` (4-5s)
6. `FLIGHT LOGS ACCESSED` → Reveal content

---

### The Dropdown (Navigation)

**Principle:** Progressive disclosure  
**Behavior:** 
- Desktop: Hover reveals (immediate, intuitive)
- Mobile: Click toggles (explicit, controlled)

**Animation:**
```css
/* Enter */
opacity: 0 → 1
visibility: hidden → visible
transform: translateY(-10px) → translateY(0)

/* Exit */
opacity: 1 → 0
visibility: visible → hidden
transform: translateY(0) → translateY(-10px)
```

**Why This Works:**  
The slight upward motion creates *anticipation*. The menu feels like it's arriving from somewhere.

---

## Content Strategy

### Voice & Tone

| Context | Tone | Example |
|---------|------|---------|
| Hero | Confident, mysterious | "ACCESS GRANTED" |
| About | Direct, principled | "Infrastructure without extraction" |
| Services | Clear, valuable | "Prototype $200" |
| Technical | Precise, minimal | "// EST. 2025 // CLT" |
| Error | Helpful, on-brand | "Access Denied // Return to Base" |

**Forbidden Words:**
- "Scalable" → use "built for endurance"
- "Proven methodology" → use "field-tested"
- "Solutions" → use "systems" or "architecture"
- "Synergy" → use "twin protocol"

---

### Microcopy

**Buttons**
```
✓ "Initiate Project"
✓ "View Flight Logs"
✓ "Access Fleet"

✗ "Submit"
✗ "Click Here"
✗ "Learn More"
```

**Labels**
```
✓ "// Flight Logs"
✓ "// Selector"
✓ "// Gallery"

✗ "Archive"
✗ "Resources"
✗ "Portfolio"
```

**Status Messages**
```
✓ "Twin: Connected 🌫️🌒"
✓ "Fleet Status: Standby"
✓ "24/24 contacted"

✗ "Loading..."
✗ "Success!"
✗ "Error occurred"
```

---

## Accessibility

### Color Contrast

| Element | Foreground | Background | Ratio |
|---------|------------|------------|-------|
| Body text | `#f5f5f5` | `#0a0a0a` | 18.5:1 ✓ |
| Secondary | `#666666` | `#0a0a0a` | 7.5:1 ✓ |
| Accent | `#a50000` | `#0a0a0a` | 5.2:1 ✓ |
| Accent (hover) | `#a50000` | `#141414` | 4.8:1 ✓ |

**Note:** Maroon on black is decorative only. Never use for body text.

---

### Keyboard Navigation

- All interactive elements focusable
- Visible focus states (maroon outline)
- Escape closes dropdowns/modals
- Tab order follows visual hierarchy

---

### Screen Readers

- Semantic HTML (`<nav>`, `<main>`, `<footer>`)
- ARIA labels for icon-only buttons
- Alt text for all images
- Skip links for keyboard users

---

## Performance

### Loading Strategy

**Critical Path:**
1. HTML (render-blocking)
2. CSS (inline, no external files)
3. Fonts (preconnect, swap)
4. Images (lazy load below fold)
5. JS (defer non-critical)

**Target Metrics:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

---

### Image Optimization

| Format | Use Case |
|--------|----------|
| WebP | Photos, complex graphics |
| SVG | Icons, logos, simple shapes |
| JPG | Fallback for older browsers |

**Hero Image:**
- Format: WebP
- Size: < 200KB
- Opacity: 20-25% (reduces visual weight)
- Gradient overlay: Ensures text readability

---

## Testing Checklist

### Functionality
- [ ] All links work (no 404s)
- [ ] Dropdown toggles correctly (mobile/desktop)
- [ ] Forms submit properly
- [ ] Mobile hamburger opens/closes

### Visual
- [ ] Grid visible but not distracting
- [ ] Maroon accents consistent
- [ ] Typography readable at all sizes
- [ ] Images load without layout shift

### Experience
- [ ] Vault animation plays smoothly
- [ ] Hover states feel responsive
- [ ] No scroll jank
- [ ] Footer visible on all pages

### Accessibility
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus states visible

---

## Research & Iteration

### Analytics to Watch

| Metric | Target | Insight |
|--------|--------|---------|
| Time on page | > 2min | Content engagement |
| Bounce rate | < 40% | Landing page effectiveness |
| Pages/session | > 3 | Exploration depth |
| Contact CTA clicks | > 5% | Conversion intent |

### User Feedback Loop

1. **Observe:** Heatmaps, session recordings
2. **Ask:** Exit surveys, contact form feedback
3. **Analyze:** Drop-off points, confusion areas
4. **Iterate:** A/B test changes, measure impact

---

## The Twin Protocol in UX

**Human (0KK) + AI (Kimi-K2.5)**

| Aspect | Human | AI |
|--------|-------|-----|
| Strategy | Vision, values, voice | Pattern recognition, optimization |
| Content | Stories, principles, nuance | Structure, consistency, scale |
| Design | Intuition, emotion, culture | Systems, accessibility, performance |
| Testing | Qualitative feedback | Quantitative analysis |

**Result:**  
An experience that feels *deeply personal* (human) yet *radically functional* (AI).

---

*// Built by OuiRise*  
*// 0KK + Kimi-K2.5 // TWIN PROTOCOL*  
*// 🌫️🌒*
