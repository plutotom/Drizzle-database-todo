import type { Config } from "drizzle-kit";
import "dotenv/config";
// import { getPreferenceValues } from "@raycast/api";

export default {
  schema: "./src/schema/*",
  out: "./assets/drizzle",
  driver: "pg",
  // url: "./code-saver.db", // this db is just for db migratio generation usage
  // dbCredentials: {
  //   host: getPreferenceValues.POSTGRES_HOST,
  //   user: getPreferenceValues.POSTGRES_USER,
  //   password: getPreferenceValues.DB_PASSWORD,
  //   database: getPreferenceValues.POSTGRES_DATABASE,
  // },
  dbCredentials: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
  },
} satisfies Config;
