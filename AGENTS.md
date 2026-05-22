# AGENTS.md

## Context Awareness

- **Read README.md First**: Always read the `README.md` at the root to understand the overall project goal, organizational structure, and where other key documents are located.

---

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
- **I18n Consistency**: When adding a page in `/`, check if a corresponding page is needed in `/en`.
- **Optimized Images**: Use `src/assets/` and Astro's `<Image />` component for local images.
- **PascalCase**: Use PascalCase for `.astro` component filenames.

Before finishing a task:

- Run `npm run build` to ensure static generation works without errors.

Avoid:

- dynamic backend
- unnecessary hydration
- large JS bundles

---

## Directory Strictness

- **Explicit Paths Only**: Do not guess file locations. Always verify against the existing `src/` structure.
- **Component Location**: All UI components MUST be in `src/components/`.
- **Style Location**: All CSS files MUST be in `src/styles/`.
- **Layout Location**: All layout components MUST be in `src/layouts/`.
- **Asset Location**: All images and local assets MUST be in `src/assets/` (per Astro convention).
- **Path Verification Protocol**: BEFORE providing any code or diff, the agent MUST explicitly list the file paths it intends to modify or create.
- **Zero Tolerance for Path Guessing**: If the agent is unsure of a directory, it MUST list the contents of `src` using `ls` before proceeding. Placing a `.astro` component in `src/styles/` is a critical failure.

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

## Internationalization (I18n)

- Default language: Korean (root `/`).
- English prefix: `/en`.
- Always ensure links between KR and EN versions are correctly mapped in the navigation.

---

## Product Boundary

Do not implement ClayTube here.

ClayTube lives in its own repository.

This repo only links to it.

---

## Strict Principle: Clarification First

1. Do not guess or assume if the requirements are ambiguous, incomplete, or open to interpretation.
2. If any aspect of the feature, architecture, edge case, or tech stack is unclear, STOP immediately. Do not write a single line of code.
3. Instead, ask me clarification questions (maximum 3-4 bullet points) to fill in the missing information.
4. Only proceed with coding after I answer your questions and explicitly say "Proceed".

---

## Commit rules

When the user requests a git commit (e.g., "커밋해줘"):

1. **Summarize the work**: Review the entire conversation history up to this point and summarize the changes made.
2. **Reconstruct a reusable prompt**: Create a prompt that could replicate this work in a new session.
3. **Generate commit message**: Formulate a structured commit message following conventional commits (e.g., feat, fix, refactor).

**Language Rule:**

- All outputs (SUMMARY, PROMPT, CHANGES, COMMIT_TITLE, COMMIT_BODY) MUST be written in **Korean**.
- Exception: Git commit types (e.g., feat:, fix:, refactor:) should remain in English.

Output format MUST strictly follow this structure:

SUMMARY:
<지금까지의 대화와 작업 내용을 요약한 한글 텍스트>

PROMPT:
<이 작업을 처음부터 다시 실행할 수 있는 한글 프롬프트>

CHANGES:

- <변경 사항 1 (한글)>
- <변경 사항 2 (한글)>

COMMIT_TITLE:
<feat: 한글로 작성한 50자 이내의 핵심 제목>

COMMIT_BODY:

- <한글로 작성한 변경 이유 및 구체적 내용 1>
- <한글로 작성한 변경 이유 및 구체적 내용 2>

## Pull Request & Push rules

When the user requests a GitHub Push or Pull Request (e.g., "푸쉬해줘", "PR 만들어줘"):

1. **Check Git Status**: Ensure all changes are committed using the "Commit rules" defined above before pushing.
2. **Collect Commit History**: Retrieve **all commit messages** on the current branch that are not yet merged into the base branch (e.g., main or develop). Do NOT rely only on the last commit.
3. **Summarize Entire Work**: Review the accumulated commit history and summarize the changes comprehensively for the Pull Request.
4. **Push & Create PR**: Push the current local branch to the remote repository and generate a Pull Request.

**Language Rule:**

- All outputs (PR_TITLE, PR_BODY) MUST be written in **Korean**.

Output format MUST strictly follow this structure:

PR_TITLE:
<feat/fix: 한글로 작성한 PR 핵심 제목>

PR_BODY:

## 작업 개요

<해당 브랜치에서 진행된 전체 커밋 내용을 종합하여, 이번 PR이 해결하려는 문제나 추가된 기능을 요약 (한글)>

## 주요 변경 사항

- <종합된 변경 사항 1 (한글)>
- <종합된 변경 사항 2 (한글)>

## 리뷰어에게 전달할 점 (선택)

- <리뷰어가 중점적으로 봐야 할 부분이나 특이 사항 (한글)>
