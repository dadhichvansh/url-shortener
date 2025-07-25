import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.js",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
