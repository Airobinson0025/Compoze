import { text, varchar, pgTable, timestamp } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.SUPABASE_DATABASE_URL || '';

const pool = postgres(connectionString, {
    max: 20,
    idle_timeout: 30,
    connect_timeout: 5,
});

export const db = drizzle(pool);

export const users = pgTable("users", {
    id:
        text('id')
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    email: 
        varchar('email')
        .notNull(),
    password: 
        varchar('password')
        .notNull(),
    firstName:
        varchar('first_name')
        .notNull(),
    lastName:
        varchar('last_name')
        .notNull(),
    createdAt:
        timestamp('created_at')
        .defaultNow(),
    updatedAt:
        timestamp('updated_at')
        .defaultNow(),
    profilePicture:
        varchar('profile_picture')
        .notNull(),
    bio:
        text('bio'),
})


export const projects = pgTable("projects", {
    id:
        text('id')
        .primaryKey()
        .$default(() => crypto.randomUUID()),
    title:
        varchar('title')
        .notNull(),
    description:
        text('description')
        .notNull(),
    createdAt:
        timestamp('created_at')
        .defaultNow(),
    updatedAt:
        timestamp('updated_at')
        .defaultNow(),
    userId:
        text('userId')
        .notNull()
        .references(() => users.id, { onDelete: 'cascade'}),
    
})