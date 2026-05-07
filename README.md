# Miny Labs — Portfolio Site

A small lab building bleeding-edge experiments at the intersection of cryptography and autonomous agents — across every chain that matters.

This repo is the public-facing landing site for [miny-labs](https://github.com/Miny-Labs).

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS** with HSL-token design system
- **framer-motion** for animations and scroll-driven reveals
- **hls.js** for the streaming background video in the CTA section
- **Inter** + **Instrument Serif** via `@fontsource`
- **lucide-react** for iconography (with inline SVGs for brand and chain glyphs)

## Sections

1. **Hero** — chain logo strip, headline, dual CTAs (Get in touch / Explore the lab)
2. **Crypto has evolved** — three paradigms we build for: zero-knowledge, autonomous agents, multi-chain
3. **Mission** — scroll-driven word-by-word reveal over a looping ambient video
4. **The lab for meaningful crypto and AI primitives** — four service columns
5. **Start your experiment** — HLS-streamed CTA section with mailto + GitHub
6. **Footer**

## Local development

```bash
npm install
npm run dev      # → http://localhost:5173
npm run build    # production bundle in /dist
npm run preview  # preview the built bundle
```

## Deployment

Deployed to Vercel via the Vercel CLI:

```bash
vercel        # link + preview
vercel --prod # production deploy
```

The site is static — no backend, no environment variables required.

## Contact

[akash@miny-labs.com](mailto:akash@miny-labs.com)
