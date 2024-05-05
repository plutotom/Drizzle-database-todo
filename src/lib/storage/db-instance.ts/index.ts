// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { getPreferenceValues } from "@raycast/api";
import { todos } from "../../../schema/dashboard-todo";

export const GetDBInstance = async () => {
  const preferences = getPreferenceValues<Preferences>();
  const client = new Client({
    host: preferences.DBHost,
    port: 5432,
    user: "postgres",
    password: "password",
    database: "db_name",
  });
  await client.connect();
  return drizzle(client, {
    schema: {
      todos,
    },
  });
};
