# Criptoactivos.Wiki

La plataforma colaborativa para indexar y categorizar proyectos Web3 y cripto para la comunidad hispanohablante.

---

## Tabla de Contenidos
- [Visión y Roadmap](./docs/ROADMAP.md)
- [Protocolo de Commits](./docs/COMMITS.md)
- [Protocolo de Deploy](./docs/DEPLOYMENT.md)
- [Variables de Entorno](./docs/ENVIRONMENT.md)
- [Guía de Desarrollo Local (Docker, start/stop)](./docs/LOCAL_DEV.md)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Testing y Calidad](#testing-y-calidad)
- [Contacto y Colaboración](#contacto-y-colaboracion)

---

## Estructura del Proyecto

```
criptoactivos/
├── backend/           # Node.js/Express API
├── frontend/          # React + Vite + TypeScript
├── docs/              # Documentación extendida
├── start.sh           # Arranca todos los servicios con Docker Compose
├── stop.sh            # Detiene y limpia los servicios
├── .env.example       # Variables de entorno de referencia
├── .gitignore         # Ignora artefactos temporales
└── README.md          # Documentación principal
```

## Testing y Calidad
- Cobertura del 100% en frontend.
- Linting y formateo automático.
- CI/CD para staging y producción.

## Documentación extendida
Toda la documentación ampliada está en la carpeta [`/docs`](./docs). Consulta especialmente:
- [Guía de desarrollo local (Docker, start/stop)](./docs/LOCAL_DEV.md)
- [Roadmap y visión de producto](./docs/ROADMAP.md)
- [Protocolo de commits](./docs/COMMITS.md)
- [Protocolo de despliegue](./docs/DEPLOYMENT.md)
- [Variables de entorno y ejemplos](./docs/ENVIRONMENT.md)

## Contacto y Colaboración
- Pull Requests y issues bienvenidos.
- Consulta [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) para contribuir de forma segura.

---

> **Toda la documentación extendida está disponible en la carpeta `/docs`.**
