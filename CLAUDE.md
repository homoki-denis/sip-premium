# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # tsc -b && vite build
npm run lint       # ESLint
npm run preview    # Preview production build
```

No test runner is configured yet.

## Architecture

**sip-prestige** is a React 19 + TypeScript SPA for a premium cocktail bar website, built with Vite. Animations are handled with GSAP (`@gsap/react`), styling with Tailwind CSS v4, and media queries with `react-responsive`.

### Key layers

- **`src/main.tsx`** — bootstraps React into `#root`
- **`src/App.tsx`** — root component; composes all page sections
- **`src/components/`** — per-section React components (e.g. `Navbar.tsx`)
- **`src/index.css`** — Tailwind v4 `@theme` and `@utility` definitions; all design tokens and layout utilities live here

### Design system (defined in `index.css`)

- Colors: `--color-yellow: #e7d393`, `--color-white-100: #efefef`; dark-first palette (black bg, white text)
- Fonts: Mona Sans, DM Serif Text, Modern Negra (Google Fonts + local TTF)
- Custom utilities: `flex-center`, `col-center`, `abs-center`, `text-gradient`, `radial-gradient`, `masked-img`

### Page sections (CSS ids)

`#hero` → `#cocktails` → `#about` → `#art` → `#menu` → `#contact`

Each section has its own set of CSS rules in `index.css`; matching components should live in `src/components/`.

### TypeScript strictness

`tsconfig.app.json` enables `noUnusedLocals` and `noUnusedParameters` — remove or prefix with `_` any unused identifiers.