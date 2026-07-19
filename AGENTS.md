# AGENTS.md

## Scope

These instructions apply to the entire repository. This is a single-package project; there are no nested applications or package-specific instruction files.

## Project overview

This repository is the source for `https://pli233.github.io/`, a static personal portfolio and résumé site.

- Runtime: React 19 with React Router and the React Compiler.
- Language: strict TypeScript and TSX only; JavaScript and JSX sources are not allowed.
- Build: Vite 7.
- Styling: Tailwind CSS 3, shadcn configuration, shared CSS variables, and a small amount of global CSS.
- Motion: GSAP plus CSS transitions, with reduced-motion support.
- Hosting: GitHub Pages through the official Pages Actions workflow.

The main architectural boundaries are:

- `src/pages/`: route-level composition for `/` and `/resume`.
- `src/sections/`: the major one-page portfolio sections.
- `src/components/`: reusable presentation and interaction components.
- `src/components/resume/`: résumé-specific components.
- `src/hooks/`: shared browser and motion hooks.
- `src/Details.ts`: portfolio content and asset references.
- `src/assets/`: imported images, logos, the résumé PDF, and generated wordmarks.
- `src/index.css`: design tokens, global styles, Tailwind layers, and shared component classes.

## Environment and setup

Use npm and the committed `package-lock.json`. Do not switch package managers or regenerate the lockfile with another tool.

```bash
nvm install
nvm use
npm ci
```

- `.nvmrc` selects Node.js 24 for local development and CI.
- `package.json` supports Node.js `>=22.12.0 <25`.
- No environment variables, backend services, or database setup are currently required.
- Keep secrets out of the repository. `.env*` files are ignored except for an optional `.env.example`.

When changing a dependency, inspect the installed version and lockfile first, consult current primary documentation or Context7 when available, and use npm commands so `package.json` and `package-lock.json` stay synchronized.

## Development workflow

Start the Vite development server:

```bash
npm run dev
```

Vite normally serves the site at `http://localhost:5173/` with hot module replacement. The two public routes to check are:

- `http://localhost:5173/`
- `http://localhost:5173/resume`

Build and preview production output with:

```bash
npm run build
npm run preview
```

Do not edit or commit `dist/`, `node_modules/`, coverage output, Playwright captures, editor metadata, or agent-local settings.

## Validation and testing

There is no unit, integration, or end-to-end test runner configured. Do not claim that `npm test` exists. The required automated validation is:

```bash
npm run typecheck
npm run lint
npm run build
```

Run all three before committing. Fix failures instead of bypassing checks.

For visual or interaction changes, also verify the affected route in a browser at desktop and mobile widths. Check keyboard interaction, visible focus, direct loading of `/resume`, and reduced-motion behavior when animation code changes.

## Code style and architecture

- Keep `tsconfig.json` strictness intact, including unused-code and unchecked-index checks.
- Use function components and hooks. Component files use PascalCase; hooks use the `useX` naming pattern.
- Keep route-level composition in `pages`, page sections in `sections`, reusable UI in `components`, shared stateful browser behavior in `hooks`, and non-React helpers in `lib`.
- Prefer small, responsibility-focused components and hooks over large files or duplicated effects.
- Reuse `useMediaQuery`, `usePrefersReducedMotion`, and existing reveal or navigation primitives before adding new global listeners.
- Use the `@/*` alias for shared source imports when it improves clarity. Preserve a touched file's existing import style rather than performing unrelated rewrites.
- Use `cn` from `src/lib/utils.ts` for conditional Tailwind class composition.
- Prefer Tailwind utilities and existing tokens in `src/index.css` or `tailwind.config.ts`. Do not introduce a parallel styling system.
- Preserve the established visual design unless the user explicitly requests a redesign. UI changes should favor clear hierarchy, concise copy, responsive behavior, and accessible native controls.
- Respect `prefers-reduced-motion`; do not make essential content depend on animation completing.
- No formatter is configured. Keep diffs focused and follow the surrounding file's punctuation and layout.

## Routing and static output

The app uses `BrowserRouter`. GitHub Pages cannot provide an SPA fallback with a successful status code, so `vite.config.ts` copies the built root entry to real static route entries.

When adding or renaming a top-level route:

1. Update the React Router routes in `src/App.tsx`.
2. Add the route segment to `staticRoutes` in `vite.config.ts`.
3. Build and confirm the matching `dist/<route>/index.html` exists.
4. Verify the route works when loaded directly, not only through client-side navigation.

Keep Vite's `base` set to `/` because this is the root user site at `pli233.github.io`, not a project subpath.

## Assets and content

- Import application assets from `src/assets` so Vite fingerprints them.
- Reserve `public/` for files that must retain a stable root URL, such as the favicon.
- Update portfolio data in `src/Details.ts` rather than duplicating content inside multiple components.
- Treat the résumé PDF and generated signature images as production assets; do not replace or recompress them without checking the rendered result.
- Add meaningful alternative text for content images and an empty `alt` value for purely decorative images.

## Build and deployment

`npm run build` writes the deployable site to `dist/`. Generated output is ignored and must not be committed.

- Pull requests and manual runs use `.github/workflows/ci.yml`.
- Pushes to `main` and manual runs use `.github/workflows/deploy.yml`.
- Deployment runs `npm ci`, type checking, linting, and the production build before uploading `dist` with GitHub's official Pages Actions.
- GitHub Actions are pinned to full commit SHAs. Preserve SHA pinning when updating them.
- Do not add a `gh-pages` branch, local deploy script, cross-repository token, or committed build output.
- Do not push or trigger a deployment unless the user explicitly authorizes it.

## Git and pull requests

- Preserve unrelated user changes in a dirty worktree.
- Prefer a dedicated `codex/` worktree or branch for non-trivial changes, then merge cleanly when complete.
- Use conventional commit messages such as `feat:`, `fix:`, `refactor:`, `chore:`, `docs:`, or `ci:`.
- Keep commits scoped to one coherent change and avoid formatting-only churn.
- Before handoff, run the required validation commands and report any manual checks performed.
- Pull requests should explain what changed, why it changed, user-visible impact, and validation. CI must be green before merge.

## Security and repository hygiene

- Never commit credentials, personal access tokens, local permission files, or generated browser captures.
- Keep workflow permissions minimal. The deploy workflow alone requires `pages: write` and `id-token: write`; CI remains read-only.
- Avoid adding third-party Actions when an official GitHub Action covers the task.
- Run `npm audit` when dependencies change and investigate relevant production findings before completion.
- Keep the repository focused on source, configuration, and durable documentation; remove template assets and stale migration artifacts when they are no longer referenced.
