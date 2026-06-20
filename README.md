# Chinel Prints

Professional printing and branding website for Chinel Prints — a Lagos-based printing company.

Built with **Next.js 15**, **React**, **Tailwind CSS**, and **Motion** for the animated footer.

## Pages

- **Home** (`/`) — Hero, services, why choose us, categories, how it works, portfolio preview, quote form, FAQ
- **About** (`/about`) — Company story, values, impact stats
- **Services** (`/services`) — All 19 services with descriptions
- **Portfolio** (`/portfolio`) — Filterable project gallery
- **Contact** (`/contact`) — Contact info and quote form

## Footer Component

The footer uses the `TextHoverEffect` and `FooterBackgroundGradient` components from `src/components/ui/text-hover-effect.tsx` — an interactive SVG text animation with gradient reveal on hover.

## Configuration

Edit `src/lib/config.ts` to update phone, email, social links, and services.

## Development

```bash
npm install
npm run dev
```

Opens at **http://localhost:3001**

## Production

```bash
npm run build
npm start
```

## Deployment

Deploy to Vercel, Netlify, or any Node.js host. Enable SSL on your domain and update canonical URLs if needed.