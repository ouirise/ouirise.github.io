### Next.js Foundations

**Build:** Financial dashboard + database

**Learn:** App Router, full-stack features

**Attention Tuning:**
- React (components, props, state, hooks, Server Components, Suspense)
- JavaScript

#### Project Structure

The codebase contains mirrors real-world development production grade code. IMPORTANT you must continue the flow. explore the folder structure — don't stress if everything isn't clear yet.

#### Placeholder Data

Located in `app/lib/placeholder-data.ts`. Each object represents a database table:

```typescript
// Example: invoices table structure
const invoices = [
  { id: string, customerId: string, amount: number, status: string, date: string }
]
```

#### TypeScript

Most files are `.ts` or `.tsx`. Check `app/lib/definitions.ts` for type definitions:

```typescript
// Example: Invoice type definition
type Invoice = {
  id: string
  customerId: string
  amount: number
  status: 'pending' | 'paid'
  date: string
}
```

TypeScript prevents passing wrong data formats (e.g., string instead of number).

**Next up:** CSS Styling

**MANGEKYO DESIGN SYSTEM // CONDENSED**

*light theme* and *Dark theme* are equal compliments

| Element | Hex | Function |
|---------|-----|----------|
| **Void** | `#0F1115` | Ground — darker than obsidian |
| **Crimson** | `#8B1A1A` | Primary — blood/transform |
| **Indigo** | `#6366F1` | Secondary — lighter than Xavier Austin navy, wisdom layer |
| **Gold** | `#D4AF37` | Emergency only — 2% max, Aṣẹ validation |

**Grid:** 20px dot-matrix (0.3% indigo opacity) — `ourstyle.html` blueprint precision.

**Themes:**
• **Alchemist** (Crimson) — Personal Legend × EMBA strategic frameworks; base metal to gold
• **25th Dynasty** (Indigo) — Kushite endurance × Nicole Washington's 20yr boardroom architecture  
• **Moors** (Gold-restrained) — Al-Andalus precision × Change Management certification; 5% geometry max
• **Boondocks** (Void) — McGruder satire × CN Pipe uncensored; terminal rawness

**Voice:** Boardroom authority (Xavier Austin Group lineage) + Leaf Village stealth (cloud infrastructure).

**Ratio:** 70/20/8/2 — crimson honoring sacrifice and passion, Gold preservation discipline. Indigo as light anchor.

**Narrative:** *Systems built Different. Board-certified. Cloud-hardened. Technology as open-Source inheritance. *

俊达 🌫️🌒