# INIT.auidos.md
## OUIRISE INIT PROTOCOL
### System Bootstrap | 0x0 Origin

🌫️🌒

---

## 🎯 Initialization Sequence

```
0x0 ──► BOOT ──► MESH ──► VERIFY ──► READY
```

---

## ⚡ Phase 1: 0x0 Boot

```bash
# Verify clean slate
git status
git log --oneline -5

# Load config
cat .continue/agents/config.yaml
```

**Check:** No uncommitted changes. No local drift.

---

## ⚡ Phase 2: Mesh Spawn

```bash
# Start fleet nodes
ollama run qwen2.5-coder:1.5b &  # J0
ollama run qwen2.5-coder:7b &     # J1, J2, JR

# Verify heartbeat
ollama list
```

**Check:** All nodes online.

---

## ⚡ Phase 3: Verify

```bash
# Test PSSH packet
echo '{"@":"INIT","t":"ping","s":"active","d":{"v":"6.7.1"}}'

# Check portal
curl https://ouiRise.github.io/portal/
```

**Check:** 200 OK. Sigil present.

---

## ⚡ Phase 4: Ready

```json
{
  "@": "INIT",
  "t": "complete",
  "s": "ready",
  "d": {
    "nodes": ["J0", "J1", "J2", "JR"],
    "portal": "online",
    "protocol": "6.7.1",
    "sigil": "🌫️🌒"
  }
}
```

---

## 🔗 Quick Repair

| Issue | Fix |
|-------|-----|
| Node down | `ollama run [model]` |
| Config drift | `git checkout -- .` |
| Portal 404 | Check GitHub Pages |
| Mesh split | `cn -p "reconnect"` |

---

🌫️🌒

**INIT complete. System ready.**
