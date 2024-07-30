import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";
import postgres from "postgres";

export const connection = postgres(process.env.SUPABASE_DATABASE_URL || '');

export const db = drizzle(connection, { schema});