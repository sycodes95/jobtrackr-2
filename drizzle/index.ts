import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { config } from "@/config/config"
const pool = new Pool({
  host: config.PG_HOST,
  port: Number(config.PG_PORT),
  user: config.PG_USER,
  password: config.PG_PW,
  database: config.PG_DB_NAME,
});

export const db = drizzle(pool);