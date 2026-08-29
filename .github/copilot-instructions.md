# Copilot Instructions - Space Adventures

This repository powers the Space Adventures universe website built with Docusaurus.

## Project purpose

Build and maintain a long-term sci-fi universe portal with three major products:

1. Encyclopedia (canon knowledge base)
2. News (blog-style announcements and updates)
3. Tales and movies (story and production hub)

## Content model

When creating or editing docs, prioritize canon consistency:

- Keep timeline references consistent with `docs/history/timeline.md`.
- Cross-link related pages (characters, worlds, factions, events, technology).
- Prefer short, structured sections over long unstructured prose.
- Preserve naming conventions once established.

## Encyclopedia taxonomy

Use these top-level doc areas:

- History
- Worlds and Territories
- Characters
- Animals
- Plants and Bioforms
- Technologies
- Devices
- Starships
- Factions and Companies
- Ideologies and Regimes
- Events and Festivals
- Tales and Movies

## Writing rules

- Tone: cinematic, clear, and lore-focused.
- Distinguish canon facts from draft ideas.
- Add practical templates when introducing a new section.
- Avoid placeholder or generic Docusaurus tutorial content.

## Technical rules

- Keep Docusaurus config clean and readable.
- Do not add unnecessary dependencies.
- Keep edits scoped and minimal for each change.
- Ensure navigation, sidebars, and links remain valid.

## News usage

Treat the `blog/` folder as the News feed:

- Posts should announce lore updates, releases, and production milestones.
- Use stable tags such as `announcement`, `universe`, and `production`.

## Validation

Before finalizing substantial changes:

- Run `npm run build`.
- Fix broken links and sidebar references.
- Confirm major routes load: `/`, `/encyclopedia/intro`, `/news`, and `/encyclopedia/tales-and-movies/overview`.
