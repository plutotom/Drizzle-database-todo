import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { GetDBInstance } from "./db-instance.ts";
// This will run migrations on the database, skipping the ones already applied
const db = await GetDBInstance();
// await migrate(db, { migrationsFolder: "./drizzle" });
await migrate(db, { migrationsFolder: "./../../../assets/drizzle/" });
// Don't forget to close the connection, otherwise the script will hang
await connection.end();
