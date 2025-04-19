# Protocolo de Commits y Calidad de Código

Para mantener un proyecto limpio, seguro y sostenible, sigue este protocolo antes de cada commit:

---

## 1. Linting obligatorio
- Ejecuta `npm run lint` en **frontend** y **backend**.
- Corrige todos los errores y advertencias antes de hacer commit.

## 2. Tests obligatorios
- Ejecuta `npm test` en **frontend** y **backend**.
- Todos los tests deben pasar antes de hacer commit.
- La cobertura debe mantenerse alta (idealmente ≥90%, objetivo: 100% en frontend).

## 3. Mensajes de commit
- Usa el formato: `tipo: descripción breve (área opcional)`
  - Ejemplo: `feat: add search bar (frontend)`
- Tipos comunes: `feat`, `fix`, `chore`, `test`, `refactor`, `docs`, `ci`
- Un commit = un solo propósito.

## 4. Pull Requests
- Haz PRs contra `develop` (staging) o `main` (hotfixes críticos).
- No merges directos a `main`.
- Solicita revisión de al menos un colaborador.
- Confirma que los checks de CI/CD pasan antes de mergear.

## 5. Hooks recomendados (opcional, pero óptimo)
- Usa [Husky](https://typicode.github.io/husky/) para automatizar lint y tests antes de commit/push:
  - Pre-commit: `npm run lint && npm test`
  - Pre-push: `npm run test`

---

[⬅️ Volver a README](../README.md)
