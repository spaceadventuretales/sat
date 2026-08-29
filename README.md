# Tales of Space Adventures

Tales of Space Adventures is a Docusaurus-powered universe portal focused on stories, movies, and canon continuity.

Naming convention used in this project:

- Full readable name: Tales of Space Adventures
- Account/owner nickname: spaceadventuretales
- Short abbreviation: sat

## Site structure

- Home portal: /
- Stories: /stories
- Movies: /movies
- News feed: /news
- Community and contact: /community
- Manifesto: /manifesto
- Motivation: /motivation
- Encyclopedia (reference layer): /encyclopedia

## Content layout

- Encyclopedia docs source: docs/encyclopedia/
- Root planning placeholders: docs/stories/, docs/movies/, docs/news/, docs/community/, docs/manifesto/, docs/motivation/
- News posts: blog/
- Route pages: src/pages/

## Development

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run start
```

Build production static site:

```bash
npm run build
```

Serve built site:

```bash
npm run serve
```

## Notes

- This repository intentionally avoids Docusaurus starter demo pages/components.
- Blog warnings about missing truncation markers are expected until posts add `<!-- truncate -->`.
