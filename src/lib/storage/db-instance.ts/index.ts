// import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import { getPreferenceValues } from "@raycast/api";

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
      SnippetModel,
      LibraryModel,
      // LabelModel,
      // SnippetModelRelations,
      // LabelModelRelations,
      // LibraryModelRelations,
      // SnippetLabelModel,
      // SnippetLabelModelRelations,
    },
  });
};
// ---------------------------------- example sqlite verions  ----------------------------------

// export const SqliteBindingFolder = (function () {
//   return resolve(environment.assetsPath, `v${process.versions.modules}`);
// })();

// export const SqliteBindingPath = (function () {
//   return resolve(SqliteBindingFolder, `${SQLITE_BINDING_NAME}-${arch()}.node`);
// })();

// export const UserDefinedDBPath = (function () {
//   const preferences = getPreferenceValues<Preferences>();
//   const dbFileAbsPath = resolve(preferences.dbFolder, DB_NAME);
//   return dbFileAbsPath;
// })();
