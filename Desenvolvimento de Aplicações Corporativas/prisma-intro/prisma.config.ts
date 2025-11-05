// Carrega variáveis do .env (DATABASE_URL, etc.)
import "dotenv/config";
// Importa helpers tipados do novo sistema de config do Prisma
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  // Caminho do seu schema
  schema: "prisma/schema.prisma",
  // Onde as migrações ficarão gravadas
  migrations: {
    path: "prisma/migrations",
  },
  // Usa o mecanismo padrão de execução de consultas, baseado em Rust.
  engine: "classic",
  // Define a(s) origem(ns) de dados. Aqui pegamos a URL do .env
  datasource: {
    url: env("DATABASE_URL"),
  },
});
