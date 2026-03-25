import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL as string,
  authToken: process.env.TURSO_AUTH_TOKEN as string,
});

console.log("Database uplink established");

//Debug
// db.execute("SELECT 1")
//   .then(() => {
//     console.log("/// TURSO CONNECTION VERIFIED: Cloud Uplink Active ///");
//   })
//   .catch((err) => {
//     console.error("/// TURSO PING FAILED ///", err.message);
//   });
