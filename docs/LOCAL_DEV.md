# Local Development with Docker Compose

Este proyecto ofrece un protocolo simple y Docker-friendly para levantar y bajar el stack completo localmente. Así aseguras que todas las dependencias (DB, backend, frontend) se inician y detienen juntas, evitando conflictos de puertos y pasos manuales.

## Prerequisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y corriendo
- No tener servicios locales ocupando los puertos `5432`, `3001`, o `5173`

## Levantar todos los servicios

```sh
./start.sh
```
O manualmente:
```sh
docker compose up --build
```
- Backend: [http://localhost:3001](http://localhost:3001)
- Frontend: [http://localhost:5173](http://localhost:5173)

## Parar y limpiar servicios

```sh
./stop.sh
```
O manualmente:
```sh
docker compose down
```

Para eliminar todos los datos (incluyendo la base de datos):
```sh
docker compose down -v
```

---

**Para troubleshooting avanzado, consulta la [documentación oficial de Docker Compose](https://docs.docker.com/compose/)**
