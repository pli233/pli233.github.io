# Peiyuan Li — Portfolio

Source for [pli233.github.io](https://pli233.github.io/), built with React, TypeScript, Vite, and Tailwind CSS.

## Development

Use the Node.js version declared in `.nvmrc`.

```bash
nvm use
npm ci
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deployment

Pull requests run the CI workflow. Pushes to `main` run the same checks, build the Vite app, and deploy the `dist` artifact with GitHub's official Pages Actions.

GitHub Pages is configured to use **GitHub Actions** as its publishing source. There is no local deploy command or generated deployment branch.

The build also emits `dist/resume/index.html`, so the public `/resume` route is served as a real static entry instead of relying on the SPA 404 redirect.
