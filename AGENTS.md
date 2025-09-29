# Repository Guidelines

This Next.js workspace powers a statically exported resume site. Use the notes below to keep contributions deployable and predictable.

## Project Structure & Module Organization
- `pages/` contains Next.js entrypoints (`index.tsx`, `_app.tsx`, `_document.tsx`); localize routing and HTML shell changes here.
- `components/` holds resume sections and shared widgets. Favor typed, prop-driven components over stateful singletons.
- `styles/theme.js` defines the Material UI theme; extend palettes and typography there instead of inlining values.
- `public/` stores static assets (favicon, future images) referenced via `/asset-name`.
- `infra/` is a TypeScript CDK app that provisions the S3 website bucket. Run infrastructure work inside this folder.

## Build, Test, and Development Commands
- `yarn dev` — start the Next.js dev server on port 8686 with fast refresh.
- `yarn build` — compile the production bundle; run before every PR or deployment.
- `yarn start` — serve the compiled bundle to mirror production.
- `yarn deploy:cdk` — build, export, install infra deps, then run `cdk deploy --profile BillResumeAdmin --context exportPath=../out`.
- `yarn deploy` — legacy script that exports the site and syncs to S3 + CloudFront. Prefer `yarn deploy:cdk` for new environments.

## Coding Style & Naming Conventions
- TypeScript interfaces, props, and components use PascalCase (`ExperienceItemProps`, `Resume`).
- Co-locate component-specific styles with React components and use theme tokens or `@mui/material` styling helpers.
- Format via `npx eslint .` and `npx prettier --check .`; configs extend Airbnb + Prettier defaults.

## Testing Guidelines
- Automated tests are absent today. Add new Jest + React Testing Library suites under `components/__tests__/` when contributing features.
- Smoke test with `yarn dev` during development and `yarn build && yarn start` before shipping.
- Document a manual test plan in PR descriptions until automated coverage is in place.

## Commit & Pull Request Guidelines
- Follow the existing log style: short, imperative subjects (`Add jest`, `text fix`), one logical change per commit.
- PRs should explain intent, list validation steps, and attach screenshots for UI updates.
- Link relevant Jira/GitHub issues and flag any production-impacting changes (e.g., requires `cdk deploy`).

## Infrastructure Workflow
- From `infra/`, run `npm install` once, then `npm run synth` to validate and `npm run deploy` to provision the S3 website bucket.
- The stack uploads `../out` if it exists; run `yarn build && next export` first or pass `--context exportPath=path/to/export`.
- Stack outputs surface the bucket name and website URL; share them with stakeholders after deployment.
