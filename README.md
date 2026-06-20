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

Local preview: **http://localhost:3001/chinel-prints/**

## Build & Deploy

Static export builds to the `out/` folder:

```bash
npm run build
```

### GitHub Pages

1. Push to the `main` branch on `avjoshua/chinel-prints`
2. In repo **Settings → Pages**, set source to **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically

The site is configured with `basePath: /chinel-prints` for project-page hosting at `https://avjoshua.github.io/chinel-prints/`.