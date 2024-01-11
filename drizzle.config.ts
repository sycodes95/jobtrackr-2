import type { Config } from 'drizzle-kit';
import { config } from '@/config/config';
export default {
  schema: './drizzle/schema.ts',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    host: config.PG_HOST ?? '',
    user: config.PG_USER,
    password: config.PG_PW,
    database: config.PG_DB_NAME ?? '',
  },
} satisfies Config;