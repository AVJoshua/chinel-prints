# Chinel Prints

Professional printing and branding website for Chinel Prints — a Lagos-based printing company.

**Live site:** [https://avjoshua.github.io/chinel-prints/](https://avjoshua.github.io/chinel-prints/)

## Tech Stack

- Next.js 15 (static export)
- React, Tailwind CSS, Motion
- GitHub Pages deployment

## Pages

- `/` — Home
- `/about/` — About
- `/services/` — Services
- `/portfolio/` — Portfolio
- `/contact/` — Contact

## Configuration

- **Site URL & base path:** `src/lib/site.ts`
- **Contact details:** `src/lib/config.ts`

## Development

```bash
npm install
npm run dev
```

Open **http://localhost:3001/chinel-prints/** (the `/chinel-prints` prefix is required).

### Fixing 404 errors (CSS/JS not loading)

This usually means a stale dev server or cached browser HTML. Run:

```bash
npm run dev:clean
```

Then hard refresh the browser: **Ctrl+Shift+R**.

> **Note:** `contentscript.js` warnings in the console come from browser extensions (e.g. MetaMask), not this site — safe to ignore.

## Build & Deploy

Static export builds to the `out/` folder:

```bash
npm run build
```

### Preview production build locally

Do **not** serve the `out/` folder directly — assets use the `/chinel-prints` base path. Use:

```bash
npm run preview
```

Then open **http://localhost:3001/chinel-prints/**

### GitHub Pages

1. Push to the `main` branch on `avjoshua/chinel-prints`
2. In repo **Settings → Pages**, set source to **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically

The site is configured with `basePath: /chinel-prints` for project-page hosting at `https://avjoshua.github.io/chinel-prints/`.