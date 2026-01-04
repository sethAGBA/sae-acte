 # Repository Guidelines

## Project Structure & Module Organization
- `sae-acte/` is the primary Next.js application (App Router).
- `sae-acte/app/` holds route components, layouts (`layout.tsx`, `page.tsx`), and `globals.css`.
- `sae-acte/public/` contains static assets served from the site root.
- `docs/` stores brand/reference materials and source assets.
- The root `package.json` is minimal; day-to-day scripts live in `sae-acte/package.json`.

## Build, Test, and Development Commands
Run commands from `sae-acte/`:
- `npm install` installs app dependencies.
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates a production build.
- `npm run start` serves the production build.
- `npm run lint` runs ESLint checks.

## Coding Style & Naming Conventions
- Use TypeScript with `.ts`/`.tsx` files.
- Match existing formatting in `sae-acte/app/`: 2-space indentation, single quotes, semicolons.
- Tailwind utility classes are used for styling; keep class lists readable and grouped logically.
- ESLint is configured in `sae-acte/eslint.config.mjs`; fix lint issues before shipping.
- Import alias `@/` maps to `sae-acte/` (see `sae-acte/tsconfig.json`).

## Testing Guidelines
- No automated test runner is configured yet.
- If you introduce tests, document how to run them and use explicit names (for example,
  `ComponentName.test.tsx`).

## Commit & Pull Request Guidelines
- Commit messages should be short and imperative (for example, "Add hero section layout").
- PRs should include a clear description, testing notes, and screenshots for UI changes.

## Configuration & Environment
- Runtime configuration lives in `sae-acte/next.config.ts`.
- Tailwind/PostCSS settings are in `sae-acte/postcss.config.mjs`.
- Use `.env.local` for any future secrets or API keys (do not commit it).
