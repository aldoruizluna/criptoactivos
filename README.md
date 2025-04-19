# Criptoactivos.Wiki

Este monorepo contiene el frontend y backend para la plataforma Criptoactivos.Wiki.

## Estructura

- `frontend/` — SPA en React + TypeScript + Vite + TailwindCSS
- `backend/` — API RESTful en Node.js + Express + TypeScript
- `docker-compose.yml` — Orquestación de servicios

## Desarrollo local

1. Instala Docker y Docker Compose.
2. Ejecuta:

```sh
docker-compose up --build
```

3. El frontend estará disponible en http://localhost:5173
4. El backend en http://localhost:3001/api

## Variables de entorno

Verifica los archivos `.env.example` en cada carpeta para configurar credenciales y puertos.

---

## Roadmap MVP
- Listado de proyectos
- Filtros y búsqueda básica
- Categorías

---

Para dudas o mejoras, abre un issue o PR.
