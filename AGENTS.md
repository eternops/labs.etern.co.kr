# AGENTS.md

## Stack

This repository uses **Astro**.

Use Astro conventions:

- `.astro` pages
- reusable components
- minimal client-side JavaScript
- static-first rendering

---

## Rules

Prefer:

- Astro components
- markdown content
- simple CSS
- no unnecessary React

Avoid:

- dynamic backend
- unnecessary hydration
- large JS bundles

---

## Routing

Primary pages:

- `/`
- `/products`
- `/about`
- `/contact`

Products are linked to separate GitHub Pages project sites:

- `/claytube`

---

## Product Boundary

Do not implement ClayTube here.

ClayTube lives in its own repository.

This repo only links to it.

---

## Commit rules

When the user requests a git commit (e.g., "커밋해줘"):

1. **Summarize the work**: Review the entire conversation history up to this point and summarize the changes made.
2. **Reconstruct a reusable prompt**: Create a prompt that could replicate this work in a new session.
3. **Generate commit message**: Formulate a structured commit message following conventional commits (e.g., feat, fix, refactor).

Output format MUST strictly follow this structure:

SUMMARY:
<Brief summary of the conversation and work done>

PROMPT:
<Reusable prompt for this task>

CHANGES:

- <Change item 1>
- <Change item 2>

COMMIT_TITLE:
<Type(scope): Short description within 50 characters>

COMMIT_BODY:

- <Detailed description of why and what changed 1>
- <Detailed description of why and what changed 2>
