# Shuja Ud Din, Portfolio

Personal portfolio of Shuja Ud Din, Senior Software Engineer and Solution Architect.

**Live site:** https://shuuja.github.io/senior-mobile-developer/

## Stack

Hand-built static site. No frameworks, no build step, no dependencies.

- Semantic HTML with JSON-LD structured data
- Modern CSS: custom properties, grid, `clamp()` fluid type, dark and light themes
- Vanilla JS for the theme toggle, mobile nav, scroll reveal, and project filters
- Self-hosted variable fonts (Inter, Space Grotesk)
- All screenshots served as resized WebP (about 840KB total, down from 19MB)
- Firebase Analytics for page views and contact click tracking

## Structure

```
index.html      Single-page site: hero, about, services, AI workflow,
                skills, experience, projects, education, contact
styles.css      Design tokens + all styling, dark theme is the default
script.js       Progressive enhancement only; the site works without JS
assets/         WebP images and woff2 fonts
```

## Deploying

Push to `main`. GitHub Pages serves the repo root directly since there is no
build step.

## Local preview

Any static server works:

```
python3 -m http.server 4173
```
