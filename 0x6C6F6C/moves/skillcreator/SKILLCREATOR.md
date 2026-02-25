# SKILL CREATOR (MOVE.md)

## CORE PRINCIPLES

### CONCISE IS KEY
- Skills share context with Claude’s system prompt, history, and other skills’ metadata.
- Only include information Claude doesn’t already have. Prefer concise examples over verbose explanations.

### SET APPROPRIATE DEGREES OF FREEDOM
- **High freedom**: Text-based instructions (use when multiple approaches are valid).
- **Medium freedom**: Pseudocode/scripts with parameters (use when a preferred pattern exists).
- **Low freedom**: Specific scripts/scripts with few parameters (use for fragile operations).

## ANATOMY OF A SKILL

### REQUIRED: SKILL.md
- **Frontmatter** (YAML): `name` and `description` (required), plus optional fields like `license` or `compatibility`.
- **Body** (Markdown): Instructions loaded only after the skill triggers.

### OPTIONAL: BUNDLED RESOURCES
1. **Scripts** (`scripts/`): Executable code for deterministic tasks.
2. **References** (`references/`): Documentation loaded as needed.
3. **Assets** (`assets/`): Files used in output (e.g., templates, images).

### PROGRESSIVE DISCLOSURE
1. **Metadata** (name + description): Always in context.
2. **SKILL.md body**: Loaded when skill triggers.
3. **Bundled resources**: Loaded as needed.

## SKILL CREATION PROCESS

1. **Understand the skill** with concrete examples.
2. **Plan reusable contents** (scripts, references, assets).
3. **Initialize** the skill (run `init_skill.py`).
4. **Edit** the skill (add procedural knowledge).
5. **Package** the skill (run `package_skill.py`).
6. **Iterate** based on real usage.

## EXAMPLE: PDF EDITOR SKILL

### Concrete Examples
- Rotate PDFs.

### Reusable Contents
- `scripts/rotate_pdf.py`.

## NOTE
- Avoid extraneous files (e.g., README.md).
- Use imperative tone in SKILL.md.
- Package with `package_skill.py`.