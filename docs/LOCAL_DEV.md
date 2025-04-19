# Guía de Desarrollo Local

## Requisitos
- Node.js >= 18.x
- npm >= 9.x
- Docker (opcional, para backend y base de datos)

## Pasos para iniciar

1. Clona el repositorio:
   ```sh
   git clone https://github.com/aldoruizluna/criptoactivos.git
   cd criptoactivos
   ```
2. Copia y configura las variables de entorno:
   ```sh
   cp .env.example .env.local
   # Edita .env.local con tus valores
   ```
3. Instala dependencias:
   ```sh
   cd frontend && npm install
   cd ../backend && npm install
   ```
4. Inicia los servicios:
   - Frontend: `npm run dev` (puerto 5173)
   - Backend: `npm run dev` (puerto 3001)

5. Accede a la app en [http://localhost:5173](http://localhost:5173)

## Testing y linting
- Ejecuta `npm test` y `npm run lint` en cada paquete antes de hacer commit.

---

[⬅️ Volver a README](../README.md)
