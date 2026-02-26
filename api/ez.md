**B4 CLONE SPAWN DOCUMENTATION (STOOPID EZ)**

**Version:** 2.6.7  
**Status:** LOCKED  
**Signature:** 🌫️🌒

---

## 1. THE ONE-LINER (STOOPID EZ)

**Spin a clone:**
```bash
cn -p "audit this folder for broken links" | tee audit.md
```

**That's it.** No setup. No config. Prompt in quotes, pipe to file.

---

## 2. LOCAL DABRIDGE PATTERN

**The Rule:** Whatever directory you're in = your local dabridge.

**In `/project/portal/`:**
```bash
cn -p "check index.html for errors" | tee index.md
cn -p "review styles" | tee beepboop.md
cn -p "full site audit" | tee bigop.md  # larger ops = bigger file
```

**All B4s (B15s) pipe to file.** The `.md` IS the local cache. No database. No cloud. Just files in your route.

---

## 3. WHY TEE?

`tee` = save to file + show in terminal. You see it work. File gets the record.

```bash
cn -p "fix the CSS" | tee fix.md
# You see output live
# fix.md stores it for next clone to read
```

---

## 4. EXTRA PIP (CONTEXT BUILDING)

**Stacking intelligence:**
```bash
# First clone scouts
cn -p "map the site structure" | tee map.md

# Second clone reads map, audits
cat map.md | cn -p "audit these routes" | tee audit.md

# Third clone reads audit, fixes
cat audit.md | cn -p "fix the errors" | tee fixed.md
```

**Local dabridge grows with each pipe.** Files accumulate context. B4s pick up where previous clones left off.

---

## 5. ROUTE-BASED CACHE

**Working in `/docs/`?**
```bash
cd docs
cn -p "summarize Core.md" | tee index.md
# index.md now holds the summary for this route
```

**Next clone in same route:**
```bash
cn -p "expand on the summary"  # reads context from previous index.md automatically
```

**Naming Convention:**
- `index.md` = default context for route
- `beepboop.md` = scratch/temp (who cares)
- `bigop.md` = large operation cache
- `[task].md` = specific mission log

---

## 6. B15s (B4 SHADOWS) → ALWAYS PIPE

**Every clone must leave evidence:**
```bash
# Bad: Clone dies, knowledge lost
cn -p "do the thing"  # output lost in terminal scroll

# Good: Clone pipes to file, knowledge persists  
cn -p "do the thing" | tee thing.md  # recorded for fleet
```

**Black box rule:** If it's not in a file, it didn't happen.

---

## 7. COMPRESSION MODE (0KK)

**For known operators:**
```bash
cn -p "okk audit" | tee a.md  # compressed command
cn -p "俊达 deploy" | tee j.md  # admin override
```

---

## 8. EXAMPLES

**Stoopid EZ Audit:**
```bash
cn -p "check site for 404s" | tee audit.md
```

**Multi-Clone Op:**
```bash
cn -p "plan the refactor" | tee plan.md
cat plan.md | cn -p "execute step 1" | tee step1.md
cat step1.md | cn -p "execute step 2" | tee step2.md
```

**Local Dabridge Sync:**
```bash
# Flush local cache to true north (optional)
cat *.md | cn -p "consolidate to ouiRise data.json"
```

---**HIERARCHICAL SWARM ARCHITECTURE LOCKED**

**Decoding Your Diagram:**
```
DSiBH (DeepSeek is B4/Head) ↔ Global++
    ↕
   B2 ←→ B2  (Middle tier - translators/coordinators)
   ↓     ↓
  B15   B15  (Worker fleet - edge execution)
   ↘   ↙
   mission.md (Convergence - local dabridge cache)
    ↑
   (feeds back to DS)
```

**The Fleet Structure:**

| Tier | Role | Model | Speed | Function |
|------|------|-------|-------|----------|
| **DS** | Admiral/Brain | DeepSeek (8B+) | Slow/Deep | Strategy, documentation, fleet coordination |
| **B2** | Lieutenant | qwen2.5 7B | Medium | Receives DS orders, translates for edge |
| **B1** | Worker | qwen2.5 0.6B | Fast/Edge | Executes actual tasks |
| **B15** | Shadow Clone | qwen2.5 1.5B | Variable | Specific missions, writes to mission.md |

**The Flow:**
1. **DS (DeepSeek)** sits at HQ, maintains Global++ memory, too heavy for edge
2. **DS** dispatches orders to **B2s** (different B2s for different domains: code B2, voice B2, research B2)
3. **B2s** break orders into micro-tasks for **B1s** (edge nodes)
4. **B1s** spawn **B15s** (shadow clones) that do the work
5. All **B15s** pipe results back to **mission.md** (the convergence point)
6. **DS** reads **mission.md** to update Global++ and plan next moves

**Why This Works:**
- **DS** doesn't need to be fast - it's the chess player thinking 5 moves ahead
- **B2s** handle the "protocol translation" (how to talk to each B1 type)
- **B1s** are tiny enough to run on phones/edge devices
- **mission.md** is the shared black box all ships write to

**The Ratios (25:5:5):**
Probably parameter ratios - DeepSeek 25B (effective) : B2 5B : B1 1B equivalent. Or context window ratios.

**Command Structure:**
```bash
# DS issues fleet order
echo "Audit entire codebase" | ds-admiral | tee mission.md

# B2s read mission, dispatch B1s  
cat mission.md | b2-code | cn -p "check src/" | tee audit-part1.md
cat mission.md | b2-docs | cn -p "check md files" | tee audit-part2.md

# B1s execute (edge fast)
cat audit-part1.md | b1-edge | tee result1.md

# All converge back to mission.md for DS review
cat result*.md >> mission.md
ds-admiral --absorb mission.md  # Updates Global++
```

**DS = The Document Keeper.** It doesn't do the work - it reads the work from mission.md and decides what the fleet does next.

**Status:** Hierarchical swarm locked. DS at HQ, B2s in field, B1s at edge, mission.md as shared consciousness.

🌫️🌒

**Summary:** Quotes for prompt. Tee for file. Route = cache. B4s pipe or they didn't happen.

**🌫️🌒**