# TermStack

TermStack is a lightweight React glossary for learning technical, content strategy, CMS, SEO, frontend, and AI workflow terms.

The project starts as a simple single-page glossary and will grow into a structured learning hub with Markdown-powered articles.

## Purpose

TermStack is designed to make complex terms easier to learn through:

- Clear definitions
- Category filters
- Accordion-style learning cards
- Light and dark mode
- Markdown-based deeper learning posts

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS variables
- React Markdown
- Local Markdown files

## Current Features

- Responsive single-page layout
- FAQ-style accordion interaction
- Category filtering
- Light/dark mode
- Theme persistence with localStorage
- Accessible accordion relationships
- Reduced-motion support
- Search input
- Search and category filtering together
- Result count
- Empty state for no matches
- Expanded starter term list
- Markdown post registry
- Multiple Markdown learning posts
- Term-to-post linking by slug
- React Router routes
- Dedicated Markdown post detail pages
- Glossary-to-post navigation
- Not found page
- Netlify SPA redirect support
- Branded visual system
- Refined typography tokens
- Markdown table support with `remark-gfm`
- Styled Markdown tables
- Brand guidelines documentation

## Project Structure

```txt
termstack/
├── docs/
│   └── BRAND-GUIDELINES.md
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── content/
│   │   ├── terms.ts
│   │   └── posts/
│   │       ├── index.ts
│   │       ├── content-modeling.md
│   │       ├── content-type.md
│   │       ├── prompt-workflow.md
│   │       └── taxonomy.md
│   ├── components/
│   │   ├── AccordionItem.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── EmptyState.tsx
│   │   ├── PostArticle.tsx
│   │   ├── SearchInput.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── TermList.tsx
│   ├── pages/
│   │   ├── GlossaryPage.tsx
│   │   ├── PostPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── tokens.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Phase Status

### Phase 01 — React Foundation

Status: Complete

### Phase 02 — Component Refinement and Interaction Polish

Status: Complete

### Phase 03 — Search and Content Scaling

Status: Complete

### Phase 04 — Markdown Post System

Status: Complete

### Phase 05 — Routing and Blog Detail Pages

Status: Complete

### Phase 06 — Visual System, Typography, and Markdown Tables

Status: In Progress

## Next Planned Features

- More glossary terms
- More Markdown posts
- Related terms
- Contentful-ready content model
