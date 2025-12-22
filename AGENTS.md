# Repository Guidelines

## Project Structure & Module Organization
- `sae-acte/` is the primary Next.js application (App Router).
- `sae-acte/app/` contains route components and layouts (`layout.tsx`, `page.tsx`) plus global styles in `globals.css`.
- `sae-acte/public/` holds static assets served at the site root.
- `docs/` stores brand/reference materials and source assets.
- The root `package.json` is minimal; day-to-day scripts live in `sae-acte/package.json`.

## Build, Test, and Development Commands
Run commands from `sae-acte/`:
- `npm install` installs app dependencies.
- `npm run dev` starts the local dev server at `http://localhost:3000`.
- `npm run build` creates the production build.
- `npm run start` serves the built app.
- `npm run lint` runs ESLint checks.

## Coding Style & Naming Conventions
- TypeScript + React: use `.ts`/`.tsx` for source.
- Follow existing formatting in `sae-acte/app/` (2-space indentation, single quotes, semicolons).
- Tailwind utility classes are used for styling; keep class lists readable and grouped logically.
- ESLint is configured in `sae-acte/eslint.config.mjs`; fix lint issues before shipping.
- Import alias `@/` maps to `sae-acte/` per `sae-acte/tsconfig.json`.

## Testing Guidelines
- No automated test runner is configured yet.
- If you introduce tests, document how to run them and keep file names explicit (for example, `ComponentName.test.tsx`).

## Commit & Pull Request Guidelines
- No commit history exists yet, so follow a simple convention: short, imperative summaries (for example, "Add hero section layout").
- PRs should include a clear description, testing notes, and screenshots for UI changes.

## Configuration & Environment
- Runtime configuration lives in `sae-acte/next.config.ts`.
- Tailwind/PostCSS settings are in `sae-acte/postcss.config.mjs`.
- Use `.env.local` for any future secrets or API keys (do not commit it).
