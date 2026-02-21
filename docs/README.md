# OuiRise

Defensive technology infrastructure for community data sovereignty. Built with vertical slicing architecture—static first, interactive second, cloud only when necessary.

## Stack

- **Vite** (build tool)
- **React** (UI)
- **TypeScript** (strict mode)
- **Tailwind CSS** (utility-first styling)
- **pnpm** (package manager)
- **React Router** (Page Router philosophy)

## Architecture: Vertical Slicing

We cascade complexity to respect user bandwidth and privacy:

**0.6B - Static**
- HTML/CSS only
- No JavaScript required for initial load
- Instant first paint
- Files: `index.html`, base CSS

**0.8B - Interactive**  
- Client-side state (React)
- No API calls
- Local browser storage only
- Files: Components, hooks, local utilities

**1.0 - Dynamic**
- API routes
- MongoDB (Atlas or self-hosted)
- Network requests only when 0.8B insufficient
- Files: `src/api/`, database models

**Rule:** Start at 0.6B. Add 0.8B only for required interactivity. Add 1.0 only for persistence.

## Quick Start

```bash
# Install pnpm if missing
npm install -g pnpm

# Clone and setup
git clone &lt;repo-url&gt;
cd ouirise-site
pnpm install

# Development
pnpm dev

# Production build
pnpm build