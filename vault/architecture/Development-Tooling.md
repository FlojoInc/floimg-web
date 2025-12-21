# Development Tooling

Code quality and automation tooling for floimg-web.

## Overview

floimg-web is an Astro-based static site for marketing and documentation. It builds to static HTML/CSS/JS and deploys via nginx in Docker.

## Tools

| Tool        | Purpose                | Config File        |
| ----------- | ---------------------- | ------------------ |
| TypeScript  | Type checking          | `tsconfig.json`    |
| ESLint      | Linting (TS + React)   | `eslint.config.js` |
| Prettier    | Formatting             | `.prettierrc`      |
| Husky       | Git hooks              | `.husky/`          |
| lint-staged | Staged file processing | `package.json`     |
| Astro       | Static site generation | `astro.config.mjs` |

## Pre-commit Workflow

Every commit triggers:

```
pnpm -r typecheck    # TypeScript validation
pnpm lint-staged     # ESLint + Prettier on staged files
```

## ESLint Configuration

The ESLint config handles TypeScript, React (for interactive islands), and Astro files:

- `@typescript-eslint/parser` + `@typescript-eslint/eslint-plugin`
- `eslint-plugin-react` + `eslint-plugin-react-hooks`
- File extensions: `.ts`, `.tsx`, `.astro`

## Package Scripts

```bash
pnpm dev            # Astro dev server
pnpm build          # Build static site
pnpm typecheck      # Type check
pnpm lint           # Lint all source files
pnpm format         # Format with Prettier
```

## Docker Build

The Dockerfile builds in two stages:

1. **Builder stage**: Node.js builds the static site
2. **Runner stage**: nginx serves the static files

```dockerfile
# Builder uses --ignore-scripts to skip Husky
RUN pnpm install --frozen-lockfile --ignore-scripts
RUN pnpm --filter @floimg-web/frontend build

# Runner is just nginx with static files
FROM nginx:alpine
COPY --from=builder /app/packages/frontend/dist /usr/share/nginx/html
```

No Node.js runtime in production - just static files served by nginx.

## Static Site Considerations

Since the output is static HTML:

- Type errors caught at build time prevent broken deploys
- Runtime errors are limited to client-side JavaScript
- API calls go to floimg-cloud (external service)

## Development vs Production

| Concern    | Development      | Production             |
| ---------- | ---------------- | ---------------------- |
| Server     | Astro dev server | nginx                  |
| Hot reload | Yes              | N/A (static)           |
| Git hooks  | Active           | N/A                    |
| Output     | On-demand        | Pre-built static files |
