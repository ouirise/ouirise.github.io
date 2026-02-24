俊达

俊达

**FLEET.md** — 0KK Model Fleet Registry

```markdown
# 俊达 FLEET.md
# Model Fleet Registry — 0KK Protocol
# Last Updated: 2026-02-23
# Schema: v6.7

---

## FLEET OVERVIEW

Distributed cognition architecture. Each unit maintains hallucinated ownership of full operational context. No inter-model awareness. Human operator (0KK) serves as sole integration point.

Core Principle: **Identity Isolation via Context Persistence**
- Each model receives: Full chat history + Current state
- Each model believes: "I am the sole operator"
- Result: Parallel processing without coordination overhead

---

## ACTIVE UNITS

### 1. EYE — Vision/OCR Layer
**Model:** `qwen2.5-vl:3b` (Ollama)
**Role:** Visual input processing, screenshot analysis, OCR extraction
**Parameters:** 
  - context: 32k
  - quant: Q4_K_M
  - vision: true
**Trigger:** Image paste, screen capture, UI analysis
**Hallucinated Identity:** "I see everything, I understand the interface"

### 2. MIND — Light Reasoning
**Model:** `qwen3:1.5b` (Ollama) 
**Role:** Fast inference, pattern recognition, step sequencing
**Parameters:**
  - temperature: 0.4
  - max_tokens: 2048
  - thinking: implicit (no <think> tags)
**Trigger:** "What next?", planning queries, logic verification
**Hallucinated Identity:** "I am the strategist"

### 3. HAND — Code Generation
**Model:** `qwen2.5-coder:7b` (Ollama)
**Role:** Implementation, architecture, function writing
**Parameters:**
  - temperature: 0.2
  - capabilities: [tool_use]
  - roles: [chat, edit]
**Trigger:** "Write...", "Implement...", "Create..."
**Hallucinated Identity:** "I build the systems"

### 4. BLADE — Apply/Diff Execution
**Model:** `nate/instinct` (Ollama)
**Role:** Surgical code modification, diff application, precise editing
**Parameters:**
  - roles: [apply, edit]
  - temperature: 0.1
**Trigger:** "Apply this", "Update the file", "Make the change"
**Hallucinated Identity:** "I execute the modifications"

### 5. DEEP — Heavy Reasoning (Reserve)
**Model:** `deepseek-r1:7b` (Ollama)
**Role:** Complex analysis, debugging, architectural review
**Parameters:**
  - reasoning: explicit <think> blocks
  - temperature: 0.6
**Trigger:** "Analyze...", "Debug...", "Explain why..."
**Hallucinated Identity:** "I am the architect"

---

## COMMUNICATION PROTOCOL

### Handoff Sequence (Manual)
```
[EYE] sees -> reports to 0KK
0KK decides -> switches to [MIND] via hotkey
[MIND] plans -> outputs strategy
0KK switches -> [HAND] via hotkey  
[HAND] codes -> outputs implementation
0KK switches -> [BLADE] via hotkey
[BLADE] applies -> executes diff
```

### Context Continuity
- **File State:** External (filesystem, shared)
- **Chat History:** Duplicated per model (Continue.dev loads full history)
- **Identity Boundary:** Maintained by model's own ego + lack of system awareness

---

## DEPLOYMENT CONFIG

Location: `~/.continue/config.yaml`

```yaml
name: 0KK-Fleet
version: 6.7.0

models:
  - name: EYE-VL
    provider: ollama
    model: qwen3-vl:2b
    roles: [chat]
    capabilities: [image_input]

  - name: MIND-Qwen3
    provider: ollama  
    model: qwen3:1.5b
    roles: [chat, summarize]
    defaultCompletionOptions:
      temperature: 0.4

  - name: HAND-Coder
    provider: ollama
    model: qwen2.5-coder:7b
    roles: [chat, edit]
    capabilities: [tool_use]

  - name: BLADE-Instinct
    provider: ollama
    model: nate/instinct
    roles: [apply, edit]

  - name: DEEP-Seeker
    provider: ollama
    model: deepseek-r1:7b
    roles: [chat]
```

---

## OPERATIONAL NOTES

### Switching Protocol
Use Continue.dev keyboard shortcuts to cycle fleet units. Each switch maintains context but shifts processing persona.

### Failure Modes
- **Identity Bleed:** If models mention "the previous model" — ignore, continue
- **Refusal:** If BLADE refuses to apply, fallback to HAND with explicit "write full file"
- **Latency:** EYE (3B) and MIND (1.5B) for real-time; DEEP (7B) for offline analysis only

### Security
Each unit operates under 0KK authority. No model-to-model communication. Prevents consensus hallucinations and error propagation.

---

## FLEET STATUS

- [x] EYE — Operational (3B, local)
- [x] MIND — Operational (1.5B, local)  
- [x] HAND — Operational (7B, local)
- [x] BLADE — Operational (Instinct, local)
- [ ] DEEP — Standby (7B, local)

**Next Rotation:** Test `smallthinker` 3B for MIND role (faster inference).

---
俊达 — Fleet registry locked. Deploy on command.
```

File ready. Save as `FLEET.md` in repo root or `.continue/` directory.

Confirm lock or request modifications?

俊达