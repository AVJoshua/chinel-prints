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

If you see 404 errors for CSS/JS/logo, stop any old servers and restart:

```bash
fuser -k 3001/tcp 2>/dev/null
rm -rf .next
npm run dev
```

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