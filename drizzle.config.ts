import type { Config } from 'drizzle-kit';

export default {
  schema: './drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: process.env.PG_HOST ?? '',
    user: process.env.PG_USER,
    port: Number(process.env.PG_PORT),
    password: process.env.PG_PW,
    database: process.env.PG_DB_NAME ?? '',
  },
} satisfies Config;