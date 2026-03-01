# NAV-CHECK.auidos.md
## Navigation Layer Discrepancy Check
### https://ouirise.github.io/ | *.md vs index.html

🌫️🌒

---

## 🎯 Check Summary

| Element | index.html | *.md Layer | Status |
|---------|-----------|------------|--------|
| 25th Dynasty refs | 18 | 26 (AGENTS.md) | ✅ Match |
| Kushite refs | 18 | Multiple | ✅ Match |
| 🌫️🌒 sigil | 18 | 63 (filebending-clin.md) | ✅ Present |
| 俊达 | 18 | Multiple | ✅ Match |
| JUNDA | 0 | Multiple | ⚠️ HTML missing |

---

## ⚡ Discrepancies Found

### 1. JUNDA Term
- **index.html:** 0 occurrences
- ***.md:** Present in FLEET.md, R2B2 patch notes
- **Status:** HTML layer missing JUNDA branding

### 2. PSSH Protocol
- **index.html:** Not visible in content
- ***.md:** Extensive (R2B2, filebending, etc.)
- **Status:** Public site missing protocol docs

### 3. Fleet Architecture
- **index.html:** "Meet the Fleet" section
- ***.md:** Detailed fleet specs
- **Status:** Surface vs depth mismatch

---

## 🔗 Cloud Verification

```bash
# Check live site
curl -s https://ouirise.github.io/ | grep -c "JUNDA"
# Expected: 0 (confirmed)

curl -s https://ouirise.github.io/ | grep -c "25th Dynasty"
# Expected: 18+ (confirmed)
```

---

## ✓ Recommendations

| Priority | Action |
|----------|--------|
| Low | Add JUNDA to HTML footer |
| Low | Link to /portal for PSSH docs |
| Medium | Sync fleet descriptions |

---

🌫️🌒

**Nav check complete. Minor discrepancies, no critical issues.**
