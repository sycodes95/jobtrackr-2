import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";
import * as schema from '../drizzle/schema'


const client = new Client({
  host: process.env.PG_HOST,
  port: Number(process.env.PG_PORT),
  user: process.env.PG_USER,
  password: process.env.PG_PW,
  database: process.env.PG_DB_NAME,
});

await client.connect();
export const db = drizzle(client, { schema });