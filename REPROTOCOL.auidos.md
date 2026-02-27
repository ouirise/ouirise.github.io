# REPROTOCOL.auidos.md
## OUINIT GHPAGES REPROTOCOL
### HTML to Next.js Structure Compiler

🌫️🌒

---

## 🎯 Purpose

File bend all .html to Next.js-style structure.  
Assume GH Pages dir is Next.js app (blackbox).  
Each route gets: .html .js .md .css /images ++ data.json

---

## 🏗️ Route Structure

```
route/
├── page.html      # JSX-compatible HTML
├── page.js        # Client logic
├── page.md        # Documentation
├── page.css       # Extracted styles
├── data.json      # Route data
├── images/        # Static assets
└── components/    # Shared components
```

---

## ⚡ Compiler: ouinit-compiler.js

```javascript
OUINIT.bendHtmlToJsx(htmlPath)
// → Creates route/ with all files
```

**Transformations:**
- `class` → `className`
- `for` → `htmlFor`
- Inline styles → JSX objects
- Wrap in React component

---

## 🔗 Batch Process

```bash
# Bend all HTML files
node -e "
const OUINIT = require('./ouinit-compiler.js');
const files = process.argv.slice(1);
OUINIT.batchBend(files);
" *.html
```

---

## ✓ Verification

| Check | Status |
|-------|--------|
| HTML → JSX | 🌫️ |
| Client JS generated | 🌫️ |
| CSS extracted | 🌫️ |
| data.json created | 🌫️ |
| Subdirs created | 🌫️ |

---

## 🌫️ Blackbox Assumption

```
GH Pages dir ≈ Next.js app
HTML ≈ JSX
Static site ≈ Dynamic routes
```

**We don't question. We bend.**

---

🌫️🌒

**REPROTOCOL locked. Compiler active.**
