---
id: overview
title: Architecture Overview
sidebar_position: 2
---

# System at a glance

Below is the 10 000‑foot view of how **AwesomeProject** fits together.

| Layer            | Main tech         | Responsibility                    |
| ---------------- | ----------------- | --------------------------------- |
| UI               | React 18 + MDX    | Renders docs & pages              |
| Static generator | Docusaurus 2      | Converts MD/MDX to static HTML    |
| Styling          | Tailwind CSS      | Utility‑first styling & dark mode |
| Search           | Algolia DocSearch | Client‑side full‑text search      |
| Hosting          | Netlify / Vercel  | CDN‑backed static hosting         |

## Key directories

```
docs/                → Markdown documentation
src/                 → React pages & components
static/              → Images, favicons, robots.txt…
docusaurus.config.js → Global site config
sidebars.js          → Sidebar structure
```

## Decision log (abridged)

| Date       | Choice                        | Rationale                                              |
| ---------- | ----------------------------- | ------------------------------------------------------ |
| 2025‑04‑10 | Chose Docusaurus over Next.js | Built‑in versioned docs saved weeks of boilerplate     |
| 2025‑04‑14 | Switched CSS to Tailwind      | Faster prototyping, consistent design tokens           |
| 2025‑04‑20 | Enabled Algolia search        | >10× better discoverability for long‑tail docs queries |
