# JUNDA API // DataBridge

**Version:** 6.7.0  
**Protocol:** 67  
**Signature:** 🌫️🌒

---

## Overview

The JUNDA API is a **markdown-based DataBridge**. No JSON. No GraphQL. Just files.

```
/api/
├── index.md          # You are here
├── ez.md             # B4 clone patterns
├── components/       # UI component registry
│   ├── button.md
│   ├── card.md
│   └── terminal.md
└── routes/           # Route documentation
    ├── portal.md
    └── fleet.md
```

---

## Quick Start

### Read API Data

```javascript
// Fetch markdown from API
const md = await fetch('/api/ez.md').then(r => r.text());

// Render with JUNDA compiler
JUNDA.md.render(md, '#container');
```

### Write API Data

```bash
# B4 clone pattern — pipe to file
cn -p "audit site" | tee /api/audit.md
```

---

## Component Registry

Components are defined as markdown with YAML frontmatter:

```markdown
---
type: component
name: button
props:
  - name: variant
    type: primary | secondary | ghost | danger
    default: primary
  - name: size
    type: sm | md | lg
    default: md
---

## Button

Primary action element.

### Usage

```javascript
JUNDA.mount('button', {
  label: 'Deploy',
  variant: 'primary',
  onClick: () => {}
}, '#container');
```
```

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Page | Landing |
| `/portal/` | OS | JUNDA Desktop |
| `/portal/fleet/` | App | 0xFLEET Terminal |
| `/api/` | Data | This documentation |

---

## Rate Limiting

Token bucket middleware built into `global.js`:

```javascript
const limiter = JUNDA.rateLimit({ 
  windowMs: 60000, 
  maxRequests: 10 
});

const result = limiter('user-id');
// { allowed: true, remaining: 9 }
// or { allowed: false, retryAfter: 45 }
```

---

## A11Y Standards

All components enforce:

| Rule | Implementation |
|------|---------------|
| No `div onClick` | Always `<button>` |
| No color-only status | Icon + text + `aria-label` |
| Alerts announced | `role="alert"` + `aria-live` |
| Focus managed | `tabindex` + keyboard handlers |

---

## Packet Format

```
v1|sender|dest|seq|payload|crc32
```

| Field | Description |
|-------|-------------|
| `v1` | Protocol version |
| `sender` | 4-char node ID |
| `dest` | 4-char target ID |
| `seq` | 3-digit sequence |
| `payload` | urlsafe_b64(JSON) |
| `crc32` | 8-char integrity |

---

## Fleet Status

| Node | Role | Status |
|------|------|--------|
| okk | Admiral | 🟢 online |
| leo_ | Heavy | 🟢 online |
| b2 | Light | 🟡 active |
| b4 | Backup | ⚪ offline |
| qn-0.1 | Shadows | ⚪ offline |

---

*Locked for Cloud Village deployment.*  
🌫️🌒 俊达
