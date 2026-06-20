# Chinel Prints

Professional printing and branding website for Chinel Prints — a Lagos-based printing company.

## Pages

- **Home** — Hero, services grid, why choose us, categories, how it works, portfolio preview, quote form, FAQ
- **About** — Company story, values, impact stats
- **Services** — All 19 services with descriptions and images
- **Portfolio** — Filterable project gallery
- **Contact** — Contact info, quote form, FAQ

## Features

- Mobile-first responsive design
- Floating WhatsApp button
- Functional quote form (opens WhatsApp with pre-filled message)
- SEO optimized (meta tags, JSON-LD, sitemap, robots.txt)
- Portfolio category filtering
- FAQ accordion

## Configuration

Edit `js/config.js` to update:

- Phone / WhatsApp number
- Email address
- Social media links
- Default WhatsApp message

## Local Development

```bash
npx serve .
```

Then open `http://localhost:3000`

## Deployment

Deploy to any static hosting (Netlify, Vercel, GitHub Pages, cPanel):

1. Upload all files to your web root
2. Point your domain and enable SSL/HTTPS
3. Update canonical URLs in HTML if your domain differs from `chinelprints.com`
4. Replace placeholder images with your own project photos

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- No build step required
- Google Fonts (Inter, Plus Jakarta Sans)