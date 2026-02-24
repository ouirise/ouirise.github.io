俊达

# Deployment Architecture

> Strategic analysis of build-time vs runtime rendering for LLM-driven sites

---

## Core Insight

The choice between static generation (SSG) and server-side rendering (SSR) determines how LLM-generated content integrates with the user experience. This is not a technical preference—it is an architectural decision that shapes content freshness, SEO, and operational complexity.

---

## Rendering Strategy Matrix

| Strategy | Build Time | Runtime | Use Case |
|----------|------------|---------|----------|
| SSG | HTML generated | CDN delivery | Content that rarely changes |
| SSR | Minimal | Server per request | Dynamic, user-specific content |
| ISR | Hybrid | Revalidate on demand | Balance of freshness and performance |
| Edge | Distributed | Close to user | Global low-latency requirements |

---

## Fleet Deployment Patterns

### Static-First (SSG)
- **Build trigger**: Git push or scheduled rebuild
- **LLM integration**: Content generated at build time
- **Advantage**: Zero runtime compute cost
- **Trade-off**: Content freshness tied to build frequency

### Server-First (SSR)
- **Build trigger**: Minimal client bundle
- **LLM integration**: Real-time content generation
- **Advantage**: Always fresh, personalized content
- **Trade-off**: Compute cost per request

### Incremental (ISR)
- **Build trigger**: Initial build + revalidation
- **LLM integration**: Background regeneration
- **Advantage**: Cached performance with fresh updates
- **Trade-off**: Stale-while-revalidate complexity

---

## OUIRISE Deployment Model

### Primary: Static-First with API Hydration

```
Build Phase:
  Markdown → HTML (at build time)
  LLM generates structured content
  Deploy to CDN edge

Runtime Phase:
  Static shell loads instantly
  JavaScript hydrates dynamic components
  API calls fetch real-time data
```

### Secondary: Edge Functions for Personalization

```
Request Flow:
  User → Edge Location → Worker
  Worker checks auth/session
  Injects user-specific data
  Returns personalized static shell
```

---

## Implementation Strategy

### Content Classification

| Type | Strategy | Example |
|------|----------|---------|
| Documentation | SSG | Moves, Positions, Shards |
| Dashboard | SSR + API | Client Portal |
| Landing | SSG + ISR | Homepage with stats |
| API | Edge | data.json endpoints |

### Build Pipeline

1. **Content Collection**
   - Aggregate markdown files
   - Validate frontmatter
   - Generate navigation structure

2. **LLM Processing**
   - Generate summaries
   - Extract keywords
   - Create search index

3. **Asset Generation**
   - Compile HTML
   - Optimize images
   - Bundle JavaScript

4. **Deployment**
   - Upload to CDN
   - Purge cache
   - Verify endpoints

---

## Performance Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to First Byte | < 100ms | CDN edge response |
| First Contentful Paint | < 1.0s | Browser metric |
| Time to Interactive | < 2.0s | JavaScript hydration |
| Build Time | < 60s | CI/CD pipeline |

---

## Operational Considerations

### Build Frequency
- **Documentation**: On git push
- **Blog content**: Scheduled daily
- **API data**: Real-time (no build)

### Cache Strategy
- **HTML**: 1 hour with stale-while-revalidate
- **Assets**: Immutable (hash in filename)
- **API**: Varies by endpoint (1min - 1hr)

### Rollback Procedure
1. Identify failed deployment
2. Switch CDN to previous version
3. Debug build logs
4. Fix and redeploy

---

## Fleet Alignment

### Heavy Slot
- Build orchestration
- Complex content processing
- Multi-step deployment pipelines

### Shadow Slot
- Quick content updates
- Single-file deployments
- Hot-fix patches

### CODER
- Build script execution
- Asset optimization
- Deployment automation

---

## Checklist

- [ ] Build pipeline defined
- [ ] Content classification complete
- [ ] Cache headers configured
- [ ] Rollback procedure tested
- [ ] Performance benchmarks established
- [ ] Monitoring alerts configured
- [ ] Documentation updated

---

*// Deployment architecture complete*  
*// Build pipeline operational*  
*// Fleet ready for scale*

俊达
