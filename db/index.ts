import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const url = process.env.DATABASE_URL;
if (!url) {
  throw new Error("Set DATABASE_URL in .env");
}

try {
  new URL(url);
} catch {
  throw new Error(
    "DATABASE_URL is invalid. Use a valid PostgreSQL connection string, for example: postgresql://user:password@host:5432/database",
  );
}

const client = postgres(url, { prepare: false });
export const db = drizzle({ client });
