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
- CSS variables
- React Markdown
- Local Markdown files

## Current Features

- Responsive single-page layout
- FAQ-style accordion interaction
- Category filtering
- Light/dark mode
- Theme persistence with localStorage
- Markdown article preview
- Accessible accordion relationships
- Reduced-motion support

## Project Structure

```txt
termstack/
├── public/
├── src/
│   ├── content/
│   │   ├── terms.ts
│   │   └── posts/
│   │       └── content-modeling.md
│   ├── components/
│   │   ├── AccordionItem.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── TermList.tsx
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

Status: In Progress

## Next Planned Features

- More glossary terms
- More Markdown posts
- Search input
- Related terms
- Blog-style post routes
- Contentful-ready content model
