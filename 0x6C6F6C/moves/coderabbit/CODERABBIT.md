# CODERABBIT.md — CodeRabbit Decommission Analysis

> **Classification**: Fleet Intelligence — Extraction Economy Counter-Strategy  
> **Status**: Operational Playbook  
> **Payload Density**: 9.9/10

---

## Executive Summary

CodeRabbit represents a classic **extraction economy** case study—leveraging FUD (fear, uncertainty, doubt) to lock clients into a SaaS treadmill. Their tiered model mirrors the GPT-4o Copilot trap: pay per use, per seat, per token, cloud-locked, and opaque.

This document outlines the **vertical slice + federated fleet** counter-strategy—the actual 0KK play for code review autonomy.

---

## CodeRabbit's SaaS Cracks

| Flaw | Impact | Fleet Counter |
|------|--------|---------------|
| **Per-seat billing** | $24/dev → 100 devs = $2.4K/year → lifetime value → lock-in | Federated: no recurring fees; install once → serve entire org |
| **Rate limits** | 200 files/hour → bottleneck → overburdened teams | Shadow slot handles 1-click lint → Heavy slot handles deep reviews |
| **Cloud dependency** | Requires GitHub/GitLab → audit trail → extraction | Ollama local slice → no cloud lock → audit in *your* HTML log |
| **Extraction risk** | Jira/Linear hooks → proprietary tools → vendor lock | Mama's approval → open standards → no vendor lock |

---

## Vertical Slice Playbook

### Phase 1: Decommission CodeRabbit

**Signal**: Heavy (DeepSeek-R1:8B) → analyze PR diff → detect gaps

**Output**: Generate **self-documenting commit messages**:
```
fix lint: reformat imports per PEP8
test coverage: added 35 lines to ensure 90% coverage
refactor: extract utility function to reduce complexity
```

### Phase 2: Federate the Fleet

**Shadow Slot** — Speed Layer:
- Handle 1-click lint → GitHub Action → enforce style
- Pre-commit hooks → instant feedback
- 200+ files/hour → no rate limits

**Heavy Slot** — Reasoning Layer:
- Run chain-of-thought → detect architectural debt
- Example output:
  ```
  warn: this function calls external API without timeout → risk DDoS
  suggest: add circuit breaker pattern → see moves/CIRCUIT.md
  ```

**CODER Slot** — Execution Layer:
- Generate **fixit patches** → VS Code extension
- Auto-apply safe transformations
- Queue complex refactors for review

### Phase 3: Audit Trail

- Mission log (HTML) → timestamp every review
- Track fixes → measure ROI
- No external billing → internal org metrics
- Zero cost → zero friction

---

## Fleet Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PR SUBMISSION                            │
└───────────────────────┬─────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
Shadow Slot    │ │ Heavy Slot   │ │ CODER Slot   │
(1-click lint) │ │ (deep review)│ │ (fixit gen)  │
└──────┬───────┘ └──────┬───────┘ └──────┬───────┘
       │                │                │
       ▼                ▼                ▼
GitHub Action    Chain-of-thought    VS Code Ext
Pre-commit       Architecture        Auto-patch
                 Debt Detection      Queue complex
       │                │                │
       └────────────────┼────────────────┘
                        ▼
              ┌─────────────────┐
              │  MISSION LOG    │
              │  (HTML Audit)   │
              └─────────────────┘
```

---

## Admiral's Counter-Play

**Signal**: *"Drop CodeRabbit → deploy TroH skill fleet-wide"*

**Payload**:
```bash
# Ollama query for vertical slice
ollama run qwen2.5:7b "analyze PR diff at $(PWD)" --output-format=markdown

# Fleet deployment
git fleet deploy --skill=troh --target=org-wide --slot=all
```

**Victory Conditions**:
- [ ] Reduce review time by 50% → internal → no SaaS markup
- [ ] Zero vendor lock → audit trail → transparency → trust
- [ ] Federated deployment → horizontal scaling → no per-seat tax
- [ ] Mission log completeness → 100% review coverage

---

## Economic Analysis

### CodeRabbit Costs (100 dev team)
```
Year 1: $24 × 100 × 12 = $28,800
Year 3: $86,400 (assuming no price hikes)
Lock-in: Proprietary audit trail → migration cost → ?
```

### Fleet Costs (100 dev team)
```
Year 1: $0 (Ollama local) + infra = ~$500
Year 3: $1,500 (maintenance)
Lock-in: None → open standards → HTML logs → portable
Savings: $84,900 over 3 years
```

---

## Related Documents

- [TROH.md](./TROH.md) — Tactical Hacking skill build
- [SLOT.md](./SLOT.md) — Slot architecture
- [HEAVY.md](./HEAVY.md) — Heavy slot specifications
- [SHADOW.md](./SHADOW.md) — Shadow slot specifications
- [FLEET.md](../positions/FLEET.md) — Fleet operations

---

## Fleet Metrics

```
FLEET ALIGNED
Payload density: 9.9/10
Extraction resistance: MAXIMUM
Vendor lock: ZERO
TroH skill: CodeRabbit decommissioned
```

---

*// Extraction economy countered*  
*// Federated code review active*  
*// 🌫️🌒*
