# AOUIMODOS.md
## File Type Specification
### AUI + MOSTAR + 3DOS Protocol

🌫️🌒

---

## 📋 Specification

| Field | Value |
|-------|-------|
| **Extension** | `.AOUIMODOS.md` |
| **Format** | Markdown + PSSH headers |
| **Encoding** | UTF-8 |
| **Protocol** | PSSH 6.7 |
| **Identity** | MOSTAR |
| **Database** | B4 |

---

## 🗂️ Structure

```
AOUIMODOS.md
├── Header (sigil + metadata)
├── 🌫️ Section (identity/protocol)
├── 🌒 Section (data/tables)
├── ⚡ Section (commands/actions)
├── 🔗 Section (relations/mesh)
├── ✓ Section (verification)
└── Footer (sigil lock)
```

---

## 📝 Header Format

```markdown
# {Title}
## {Subtitle}
### {Protocol} | {Database}

🌫️🌒
```

---

## 🏷️ Section Headers

| Emoji | Meaning | Content |
|-------|---------|---------|
| 🌫️ | Fog | Identity, protocol, spec |
| 🌒 | Moon | Data, tables, records |
| ⚡ | Lightning | Commands, execution |
| 🔗 | Link | Relations, mesh, routes |
| ✓ | Check | Verification, integrity |
| 🎯 | Target | Purpose, goal |
| 🏗️ | Build | Architecture, schema |
| 📊 | Chart | Tables, queries |
| 📝 | Note | Examples, usage |

---

## 🔧 PSSH Packet Format

```json
{
  "@": "AOUIMODOS",
  "t": "{type}",
  "s": "{status}",
  "d": {
    "file": "{name}",
    "sections": [],
    "sigil": "🌫️🌒"
  }
}
```

---

## 🗄️ B4 Database Integration

```yaml
db: B4
table: aouimodos_files
schema:
  id: primary_key
  name: string
  type: enum[skill,meta,config,data]
  sections: array
  relations: foreign_key[]
  sigil: string
```

---

## 🔗 File Relations

```
.AOUIMODOS.md ──► .md (readable)
     │
     ├──► PSSH (compressed)
     ├──► B4 (database)
     ├──► 3dos (meta)
     └──► MOSTAR (protocol)
```

---

## ✓ Validation

| Check | Rule |
|-------|------|
| Header | Must contain 🌫️🌒 |
| Sections | Minimum 3 emoji headers |
| PSSH | Valid JSON in code blocks |
| Footer | Must end with 🌫️🌒 |
| Relations | Must link to B4 db |

---

## 📚 Examples

### Skill File
```markdown
# Skill.Name
## MOSTAR Skill
### PSSH 6.7 | B4

🌫️🌒

## 🎯 Purpose
...

## ⚡ Commands
...

🌫️🌒
```

### Meta File
```markdown
# Meta.Name
## 3dos Database
### B4 Format | MOSTAR

🌫️🌒

## 🗂️ Schema
...

## 📊 Tables
...

🌫️🌒
```

---

## 🔐 Lock

```json
{
  "@": "AOUIMODOS",
  "t": "spec",
  "s": "locked",
  "d": {
    "version": "6.7.1",
    "sigil": "🌫️🌒"
  }
}
```

---

🌫️🌒

**AOUIMODOS.md file type locked.**
