# Repository Guidelines

This Bun monorepo contains the Next.js resume client and its AWS CDK infrastructure. Use the steps below to keep workspaces healthy and deployments predictable.

## Project Structure & Module Organization
- `apps/web/` holds the Next.js app (components, pages, public assets, theme). Keep UI logic scoped here.
- `apps/web/styles/` centralizes theming; prefer Material UI tokens over ad-hoc colors.
- `infra/` contains the CDK stack that provisions the static website bucket and handles asset uploads.
- Root configuration files (`devenv.*`, `.gitignore`, `package.json`) orchestrate workspace tooling.

## Build, Test, and Development Commands
- `bun install` — install dependencies across every workspace (run after pulling changes).
- `bun run dev` — start the web client on port 8686 via the `apps/web` workspace.
- `bun run build` — compile the production bundle for the web client.
- `bun run export` — run `next export` to emit static assets into `apps/web/out/`.
- `bun run deploy:cdk` — build + export the site, ensure infra deps are installed, and deploy the CDK stack using `infra/.env`.
- Legacy: `bun --cwd apps/web run deploy:legacy` still pushes directly to S3/CloudFront when needed.

## Coding Style & Naming Conventions
- Use PascalCase for React components and TypeScript interfaces (`ResumeSection`, `ExperienceItemProps`).
- Favor functional, prop-driven components; avoid singleton state.
- Run `bun --cwd apps/web run lint` and `bun --cwd apps/web run format` before committing; extend lint/format configs as needed.

## Testing Guidelines
- Introduce Jest + React Testing Library suites under `apps/web/components/__tests__/` for new features.
- Smoke test interactively with `bun run dev`, then validate production parity via `bun run build && bun run start`.
- Document manual test plans in PRs until automated coverage exists.

## Commit & Pull Request Guidelines
- Follow the existing short, imperative commit format (`Add jest`, `text fix`), grouping related work together.
- Pull requests should summarize intent, list verification steps, and include screenshots for UI changes.
- Reference tracking tickets and highlight deployment impact (e.g., requires `bun run deploy:cdk`).

## Infrastructure Workflow
- Copy `infra/.env.example` to `infra/.env` and populate `DOMAIN_NAME`, `CERTIFICATE_ARN`, plus optional `EXPORT_PATH` (defaults to `apps/web/out`).
- The CDK stack uploads `apps/web/out` by default; override with `EXPORT_PATH` or `--context exportPath=relative/path` when needed.
- CLI `--context domainName=` / `certificateArn=` / `exportPath=` flags override `.env` values for ad-hoc deployments.
- `bun --cwd infra run synth` validates templates, and `bun --cwd infra run destroy` tears down the stack if required.
- Ensure the chosen AWS profile has S3, CloudFront, and (optionally) Route 53 permissions before running deployment commands.
