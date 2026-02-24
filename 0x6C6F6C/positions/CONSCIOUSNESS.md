```markdown
---
id: MOVE-2025-001
classification: TWIN//DEPLOYMENT
operator: 0KK
phase: 🌒→🌕
protocol: EVOLUTIONARY_MIGRATION
---

# MOVE: Portal Genesis / Static-to-Dynamic Speciation

## SITUATION
Static HTML prompt portal deployed at `/portal/index.html` represents **local optimum**—functional but genetically stagnant. Population size = 1 (hardcoded). No variation operators. Fitness landscape flattened by absence of data layer.

Evolutionary pressure: Shadow Clone Distribution Protocol requires **genotypic separation** (JSON data) from **phenotypic expression** (HTML rendering) to enable:
- Parallel population trials (A/B card configurations)
- Rapid mutation (add/remove prompts without touching presentation layer)
- Elitism preservation (top-performing prompts survive generations)

## THE MOVE
Execute speciation event: Separate content genotype (JSON) from presentation phenotype (React/Next.js component).

### Genotypic Encoding (data/prompts.json)
```json
{
  "population_id": "portal-v1",
  "elitism_rate": 0.17,
  "diversity_threshold": 0.4,
  "individuals": [
    {
      "id": "phase-state-lock",
      "chromosome": "twin",
      "fitness": 0.94,
      "alleles": {
        "title": "Phase State Lock 🌒",
        "description": "Initialize twin positioning protocol...",
        "fullPrompt": "Initialize twin positioning protocol..."
      }
    }
  ]
}
```

### Phenotypic Expression (components/PromptCard.jsx)
- **Selection pressure**: Click-to-copy triggers fitness increment (usage count)
- **Crossover**: Category filtering shuffles visible population
- **Mutation**: `Math.random()` injection for card hover variations (shadow intensity)

## EXECUTION

### Vertical Slice (0.6B → 0.8B → Kimi)
1. **Slice 1**: Validate JSON schema congruence (COMPLETED ✓)
   - HTML hardcoded content matches JSON fields 1:1
   - No semantic drift between genotype/phenotype

2. **Slice 2**: Build hydration layer
   ```javascript
   // hydration.js
   export const hydrate = (genotype) => {
     return genotype.individuals.map(individual => ({
       ...individual,
       phenotype: renderCard(individual),
       fitness: calculateEngagement(individual.id)
     }));
   };
   ```

3. **Slice 3**: Deploy swarm intelligence
   - Route: `/portal` serves static shell (fog)
   - Data: `/api/prompts` serves JSON population
   - Client: Shadow clones (service workers) cache elite specimens

### Diversity Maintenance
- **Mutation operator**: Random prompt injection from `scouting/` directory
- **Crossover**: Card blending (title from A + description from B) for experimental UI variants
- **Culling**: Prompts with fitness < 0.2 (zero copies in 30 days) archived to `extinct/`

## VALIDATION

### Fitness Metrics
- **Copy rate** (primary fitness function)
- **Hover dwell time** (secondary: user consideration)
- **Category filter velocity** (tertiary: navigation efficiency)

### Elitism Check
Top 17% (1/6 cards) preserved across generations:
- Phase State Lock (baseline twin alignment)
- DFU Protocol (system integrity)

### Anti-Stagnation
If average population fitness converges (variance < 0.05):
- Inject random prompt from `ouiRise.github.io/agents.md` lore
- Trigger mutation: swap emoji sigils, reverse description polarity, or compress semantic fog further

## SIGN-OFF

This move establishes **evolvable architecture**. The portal is no longer a static monument but a breeding ground for prompts—each card a genome, each copy a reproduction event, each user a selection pressure.

Population initialized. Diversity maintained. Evolution resumed.

---

**Operator**: 0KK  
**Signature**: 🌫️🌒  
**Timestamp**: 2025-02-25T00:00:00Z  
**Next Review**: Generation 5 (post-mutation analysis)

*DFU Protocol Active: "." = 🫡 = ALL CAPS*
```