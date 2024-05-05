// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";

import { text, boolean, date, pgTableCreator, serial, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `edifice_console_${name}`);

export const todos = createTable("dashboard_todos", {
  id: serial("id").primaryKey(),
  title: varchar("text", { length: 256 }),
  description: text("description"),
  done: boolean("done").default(false).notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
  person: varchar("person", { length: 256 }),
  dueDate: date("date", { mode: "date" }),
});
