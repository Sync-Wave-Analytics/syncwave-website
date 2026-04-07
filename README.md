# SyncWave Analytics

<!-- CI/CD Status -->

[![Deploy](https://github.com/Sync-Wave-Analytics/syncwave-website/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/Sync-Wave-Analytics/syncwave-website/actions/workflows/deploy.yml)
[![CI](https://github.com/Sync-Wave-Analytics/syncwave-website/actions/workflows/ci.yml/badge.svg)](https://github.com/Sync-Wave-Analytics/syncwave-website/actions/workflows/ci.yml)

<!-- Tech Stack -->

[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-runtime-F9F1E1?logo=bun&logoColor=black)](https://bun.sh/)

<!-- Quality & Security -->

[![Vitest](https://img.shields.io/badge/tested_with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![ESLint](https://img.shields.io/badge/linted_with-ESLint-4B32C3?logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/formatted_with-Prettier-F7B93E?logo=prettier&logoColor=black)](https://prettier.io/)
[![Dependabot](https://img.shields.io/badge/Dependabot-enabled-025E8C?logo=dependabot&logoColor=white)](https://github.com/Sync-Wave-Analytics/syncwave-website/security/dependabot)
[![GitHub Pages](https://img.shields.io/badge/deployed_on-GitHub_Pages-222222?logo=githubpages&logoColor=white)](https://syncwaveanalytics.com)
[![License](https://img.shields.io/badge/license-proprietary-red)]()

---

Corporate website for [SyncWave Analytics](https://syncwaveanalytics.com) — a data engineering and AI consultancy.

## Tech Stack

| Layer     | Technology                      |
| --------- | ------------------------------- |
| Framework | React 19                        |
| Build     | Vite 7 + Bun                    |
| Routing   | TanStack Router (file-based)    |
| Styling   | Tailwind CSS v4 + shadcn/ui     |
| Testing   | Vitest + Testing Library        |
| Deploy    | GitHub Pages via GitHub Actions |

## Getting Started

```bash
bun install
bun run dev        # http://localhost:3000
```

## Scripts

```bash
bun run dev        # Dev server
bun run build      # Production build
bun run lint       # ESLint
bun run typecheck  # TypeScript strict check
bun run test       # Vitest
bun run format     # Prettier
```

## Project Structure

```
src/
├── components/    # Reusable UI components
├── data/          # Static content (services, team, jobs)
├── hooks/         # Custom React hooks
├── lib/           # Utilities (cn helper)
├── routes/        # File-based route pages
└── styles.css     # Tailwind theme & custom properties
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow which builds and deploys to GitHub Pages. The `postbuild` script creates `404.html` for client-side SPA routing.

Custom domain: [syncwaveanalytics.com](https://syncwaveanalytics.com)
