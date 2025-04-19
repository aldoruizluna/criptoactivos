import express from 'express';
import dotenv from 'dotenv';
import { Pool } from 'pg';

// Configuración de variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Conexión a PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Placeholder: rutas de proyectos, categorías, filtros

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});
