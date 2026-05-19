# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Infinity Radio Panamá** — a client-side React SPA for a Latin music internet radio station broadcasting from Chitré, Panamá. No backend, no auth, no database.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # ESLint (flat config, v9)
```

No test framework is configured.

## Architecture

**Stack:** React 18 + Vite 6, Material UI v6 (with Emotion), Styled Components. Plain JSX (no TypeScript). CSS Modules used only in `Navbar.module.css`; all other components use co-located `.css` files.

**Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Layout (App.jsx):** `Navbar` → `Header` → main content row (`RadioPlayer` + `News` side-by-side) → `Footer` + fixed WhatsApp button. No router — navigation links in the Navbar are non-functional UI elements.

**Key components:**
- `src/components/RadioPlayer.jsx` — live audio player. Stream URL is hardcoded: `https://s2.mexside.net/8048/stream`. Controls: play/stop, volume slider, rotating album art (Unsplash images keyed by genre).
- `src/components/News.jsx` — fetches Latin music news from RSS2JSON, NewsAPI, and AllOrigins CORS proxy. Falls back to 10 curated hardcoded items on failure. Auto-refreshes every 30 min.
- `src/components/Footer.jsx` — contact info (phone +507 63247541, email, Chitré location), social links.
- `src/services/newsService.js` — news fetching logic with multi-source fallback chain.

**Styling:** Dark vintage/retro theme (deep browns `#2d1810`, orange accent `#ff6600`/`#ffcc00`). MUI provides component scaffolding; custom CSS files handle the wood-grain textures, animations, and responsive layout. Breakpoints handled via CSS media queries and MUI `sx` props.

**No environment variables** are used — all API keys and URLs (Unsplash, NewsAPI demo key, stream URL) are hardcoded in component files.

## ESLint

Uses ESLint v9 flat config (`eslint.config.js`). Rules: `react-refresh/only-export-components` (warn). Run `npm run lint` before committing; fix warnings in modified files.
