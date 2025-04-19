# Protocolo de Commits y Deploy

## 1. Protocolo de Commits

- Usa mensajes claros y consistentes: `tipo: descripción breve (área opcional)`
- Tipos: `feat`, `fix`, `chore`, `test`, `refactor`, `docs`, `ci`
- Commits atómicos: un solo propósito por commit.
- Usa ramas para features, hotfixes y releases: `feature/*`, `hotfix/*`, `release/*`
- Pull Request obligatorio antes de mergear a `develop` (staging) o `main` (producción).

## 2. Protocolo de Deploy

### Local
- Usa `.env.local` para variables sensibles.
- Comando: `npm run dev` en frontend y backend.
- Requiere tests y linting antes de commit.

### Staging
- Rama: `develop` o `staging`
- Variables: `.env.staging`
- Deploy automático tras merge a `develop` usando CI/CD (GitHub Actions, Vercel, Netlify, Railway, etc).
- Acceso protegido.

### Producción
- Rama: `main`
- Variables: `.env.production`
- Deploy automático tras merge a `main` usando CI/CD.
- Monitoreo y alertas activas.

## 3. Variables de Entorno

Ver [ENVIRONMENT.md](./ENVIRONMENT.md) para detalles y ejemplos de archivos `.env`.

## 4. Flujo recomendado

1. Crea rama: `git checkout -b feature/nueva-funcionalidad`
2. Haz commits atómicos y descriptivos
3. Pasa tests y linting localmente
4. Haz push y abre un PR a `develop`
5. Deploy automático en staging
6. QA y validación
7. Merge a `main` para producción
8. Deploy automático en producción

---

[⬅️ Volver a README](../README.md)
