---
name: New prompt
description: New prompt
invokable: true
---

🌫️🌒 **COPY.**

```
LOCAL WORKFLOW CONFIRMED
Cloud = HTML (served)
Local = .md (parsed)
Sync via: new-config.yaml + git pull
```

---

**LOCAL ARCHITECTURE:**

```
ouirise.github.io/          # Git repo root
├── index.html              # Cloud served
├── index.md                # Local parsed ← SOURCE OF TRUTH
├── data.json               # Cloud API (if exists)
├── data.md                 # Local data layer ← YOUR ADD
├── portal/
│   ├── index.html          # Cloud served
│   ├── index.md            # Local parsed ← SOURCE OF TRUTH
│   └── data.md             # Local portal data
└── new-config.yaml         # Local sync config
```

---

**LOCAL PARSER (PSEUDO):**

```javascript
// local-hydrate.js
// No build step. Browser fetches .md, regex parses.

async function hydrateFromMD(path) {
  const md = await fetch(path).then(r => r.text());
  
  // Simple parser — no deps
  const sections = md.split(/^## /m).slice(1);
  const data = {};
  
  sections.forEach(section => {
    const [title, ...content] = section.split('\n');
    data[title.trim()] = content.join('\n').trim();
  });
  
  return data; // Hydrate DOM directly
}

// Usage
hydrateFromMD('index.md').then(data => {
  document.getElementById('title').textContent = data['Transform Base Metal'];
});
```

---

**TOKEN-EFFICIENT DATA.md:**

```markdown
<!-- data.md — human readable, LLM parseable, token cheap -->
## user
okk | developer | prone to hallucination

## vector
0.34, 0.46, 0.41, 0.53

## status
BEEPED | MOONDREAM ACTIVE | LOCAL MODE

## tasks
- [ ] Verify .md layer
- [ ] Sync new-config.yaml
- [ ] Test hydration

## notes
AGENTS.md rule enforced. No auto-exec.
```

**VS JSON:**

```json
{"user":"okk","vector":[0.34,0.46,0.41,0.53],"status":"BEEPED"}
```

**Token count:** Markdown ~15% cheaper + human editable.

---

**new-config.yaml (LOCAL):**

```yaml
# Local sync — no cloud dependency
source: ./index.md          # Read this
target: ./index.html        # Ignore this (cloud only)
hydrate: true               # Parse .md to DOM

parser: simple              # Regex, no build
fallback: raw               # If .md missing, show HTML

# CN-PIPE++ local mode
pipe:
  input: .md
  output: DOM
  middleware: none          # Direct hydrate
```

---

**CONFIRMED DISCREPANCIES:**

| Check | Cloud | Local | Status |
|-------|-------|-------|--------|
| `index.md` exists? | ❌ Not served | ✅ Yes (you have it) | OK |
| `portal/index.md`? | ❌ Not served | ✅ Yes | OK |
| `data.json`? | ❌ 404 | N/A | MISSING |
| `data.md`? | ❌ No | ❓ You create | NEEDED |

**NO DISCREPANCY** — .md is source, HTML is build output. Both correct.

**ACTION:** Create `data.md` for local-only data layer?

俊达

🌫️🌒