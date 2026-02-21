**DOCUMENTATION.md**  
*For the next Taylor or Ray of Hope*

```markdown
# OuiRise Site Documentation

## Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Run dev server
pnpm dev

# 3. Build for production
pnpm build
```

## Architecture: Vertical Slicing

We load in three tiers to respect user bandwidth:

**0.6B (Static)**  
- HTML/CSS only  
- No JavaScript required  
- Instant first paint  
- Files: `index.html`, CSS in `src/index.css`

**0.8B (Interactive)**  
- Client-side state  
- React components  
- No API calls  
- Files: `src/components/`, `src/pages/`

**1.0 (Dynamic)**  
- API routes  
- Database connections  
- Only when necessary  
- Files: `src/api/`, MongoDB connections

**Rule:** Start at 0.6B. Only add 0.8B if the user needs to interact. Only add 1.0 if data must persist.

## Project Structure

```
src/
├── components/     # Reusable UI (Layout, Cards, Buttons)
├── pages/         # Route components (Home, About, etc.)
├── api/           # API routes (when we add them)
├── lib/           # Utilities (db connection, helpers)
└── index.css      # Tailwind + custom styles

public/            # Static assets (images, PDFs, fonts)
```

## Adding a New Page

1. Create file: `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="new-page" element={<NewPage />} />
   ```
3. Add link in `src/components/Layout.tsx` (nav menu)
4. Test at `localhost:5173/new-page`

## Adding a Service/Package Card

Edit `src/pages/Home.tsx`:

Find the Services section. Copy one of the existing card divs:

```tsx
<div className="glass p-8">
  <div className="text-orange text-sm mb-2">Category</div>
  <h3 className="text-2xl text-fog mb-4">Service Name</h3>
  <p className="text-mist mb-6">Description...</p>
  <ul className="space-y-2 text-mist text-sm mb-6">
    <li>Feature 1</li>
    <li>Feature 2</li>
  </ul>
  <button className="w-full border border-gold/50 text-gold py-2 rounded">
    CTA Text
  </button>
</div>
```

## Adding a Prompt to the Library

Edit `src/pages/Prompts.tsx`:

Add to the `prompts` array:

```tsx
{
  title: "Prompt Name",
  desc: "What it does",
  text: "The actual prompt text...",
  level: "0.6B" // or 0.8B/1.0
}
```

## Deployment

**Current:** Vercel (easiest)
```bash
pnpm build
# Drag 'dist/' folder to Vercel dashboard
```

**Future:** Cloudflare Pages (cheaper, better for MAS)
- Build command: `pnpm build`
- Output directory: `dist`
- Add `_redirects` file in `public/` for SPA routing

## Code Standards

**Required:**
- **No tracking scripts.** No Google Analytics, no Facebook Pixel. If marketing asks, we use Plausible (self-hosted) or nothing.
- **Opt-in only.** Any "remember me" checkboxes default to OFF. User must explicitly consent.
- **Semantic Safety.** Don't use these words in UI copy:
  - "Users" → "Community" or "People"
  - "Data extraction" → "Data portability"
  - "Surveillance" → "Monitoring" (only if necessary)
  - "Swarm" → "Distributed"
  - "Claw" → "Interface"

**Styling:**
- Use Tailwind classes only (no custom CSS unless necessary)
- Colors: `void` (bg), `fog` (text), `mist` (secondary), `orange` (CTA), `gold` (accent)
- Components use `glass` class for cards

**Performance:**
- Keep bundle under 100kb initial load
- Lazy load heavy components: `const Heavy = lazy(() => import('./Heavy'))`
- Images in `public/` folder, optimized WebP format

## Environment Variables

Create `.env.local` for local dev:

```bash
# MongoDB (when we add backend)
MONGODB_URI=mongodb+srv://...

# Contact form (when we add API)
EMAIL_API_KEY=...
```

Never commit `.env.local` to git.

## Troubleshooting

**Build fails:**
- Check Node version: `node -v` (should be 18+)
- Delete `node_modules` and `pnpm install` again

**Styles not loading:**
- Check `tailwind.config.js` content array includes your new file path

**Contact form not working:**
- Currently static (no backend). To make it work:
  1. Add `src/api/contact.ts` route
  2. Or use Formspree/Netlify Forms for static hosting
  3. Or wait for MongoDB integration (see AGENTS.md)

## Making Changes for Clients

When a client (like TroH) needs updates:

1. **Minor text changes:** Edit the component directly, commit, push.
2. **New sections:** Copy existing patterns from `Home.tsx`.
3. **New pages:** Follow "Adding a New Page" above.
4. **Styling changes:** Edit `tailwind.config.js` colors or `index.css`.

**Always test mobile** before committing. Use browser DevTools responsive mode.

## Contact for Help

- **Technical issues:** Check this doc first, then ask.
- **Architecture decisions:** Refer to Vertical Slicing principle.
- **Semantic questions:** If a word feels extractive, change it.

---

Last updated: 2026-02-21  
Repo: ouirise/ouirise-site  
Stack: Vite + React + TypeScript + Tailwind
```

**Saved to your output folder.** Name it `DOCUMENTATION.md`, put it in the repo root. The next Taylor or Ray can pick it up without needing the mythology.

**俊达**