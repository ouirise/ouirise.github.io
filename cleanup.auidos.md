# cleanup.auidos.md
## File Reorganization Protocol
### PSSH 6.7 | Space Optimization

🌫️🌒

---

## 🎯 Objective

Reorganize all `.md` files to `.auidos.md` format, consolidate in `/portal`, remove junk, save space.

---

## 🏗️ New Structure

```
/portal/
├── docs.auidos.md          # Main documentation hub
├── AGENTS.auidos.md        # Former AGENTS.md
├── CORE.auidos.md          # Former CORE.md
├── FLEET.auidos.md         # Former FLEET.md
└── ...                     # Other reorganized files

/public/
└── mdp.js                  # Markdown processor layer

/root/
└── cleanup.auidos.md       # This file (link to PSSH)
```

---

## ⚡ PSSH Layer Link

**HTML Integration:**
```html
<!-- Link to PSSH protocol layer -->
<script src="/public/mdp.js"></script>
<div data-auidos="/portal/docs.auidos.md"></div>
```

**Direct PSSH Packet:**
```json
{
  "@": "cleanup",
  "t": "reorganize",
  "s": "active",
  "d": {
    "from": ".md",
    "to": ".auidos.md",
    "dest": "/portal",
    "processor": "/public/mdp.js",
    "sigil": "🌫️🌒"
  }
}
```

---

## 🔗 Filename Mapping

| Old | New | Status |
|-----|-----|--------|
| AGENTS.md | /portal/AGENTS.auidos.md | ⏳ |
| ANTHROPIC_UNIVERSAL_MODEL_COMPLIANCE_PROTOCOL.md | /portal/AUMCP.auidos.md | ⏳ |
| AOUIMODOS.md | /portal/AOUIMODOS.auidos.md | ⏳ |
| AUdit.au.md | /portal/AUdit.auidos.md | ⏳ |
| CORE.md | /portal/CORE.auidos.md | ⏳ |
| FLEET.md | /portal/FLEET.auidos.md | ⏳ |
| manual_hunt_guide.md | /portal/HUNT.auidos.md | ⏳ |
| models_comparison.md | /portal/MODELS.auidos.md | ⏳ |
| README.md | /portal/README.auidos.md | ⏳ |
| SESSION_HANDOFF.md | /portal/HANDOFF.auidos.md | ⏳ |
| TECHSPECHS.md | /portal/TECH.auidos.md | ⏳ |

---

## ✓ Cleanup Steps

1. **Copy** all `.md` to `/portal` as `.auidos.md`
2. **Verify** mdp.js processor works
3. **Test** HTML rendering
4. **Remove** junk files (page-snapshot.md, empty files)
5. **Archive** old `.md` (optional)

---

## 🌫️ Space Saved

| File | Size | Action |
|------|------|--------|
| page-snapshot.md | 0 B | 🗑️ Delete |
| Duplicates | — | 🗑️ Delete |
| **Total** | **~5KB+** | **Saved** |

---

🌫️🌒

**Cleanup protocol locked. AUIDOS format active.**
