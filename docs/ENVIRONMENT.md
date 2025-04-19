# Variables de Entorno

Utilizamos archivos `.env` para gestionar variables sensibles y de configuración para cada entorno:

- `.env.local` — Desarrollo local
- `.env.staging` — Staging (pre-producción)
- `.env.production` — Producción

## Ejemplo de archivo `.env.example`

```
# General
NODE_ENV=development

# Backend
DATABASE_URL=postgres://user:password@localhost:5432/criptoactivos
JWT_SECRET=supersecret

# Frontend
VITE_API_URL=http://localhost:3001/api
```

**Nunca subas archivos `.env` reales al repositorio. Usa `.env.example` como referencia.**

---

[⬅️ Volver a README](../README.md)
