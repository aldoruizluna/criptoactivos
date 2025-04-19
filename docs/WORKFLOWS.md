# Continuous Integration for Criptoactivos.Wiki

This workflow ensures code quality, test coverage, and safe deployments for all environments.

## Features
- Lint and test on every push and PR
- Deploy to staging on `develop` branch
- Deploy to production on `main` branch

---

## Workflow Summary
- **On PR or push to any branch:**
  - Install dependencies for frontend and backend
  - Run linting and tests
- **On push to `develop`:**
  - Deploy frontend to staging (Vercel/Netlify)
  - Deploy backend to staging (Railway/Render/Heroku)
- **On push to `main`:**
  - Deploy frontend to production
  - Deploy backend to production

---

## Secrets
- Configure secrets in GitHub: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `RAILWAY_TOKEN`, etc.

---

[⬅️ Volver a README](../README.md)
