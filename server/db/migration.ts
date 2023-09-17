import { db, schemaConfig } from "@server/db/db";

export default async function dbMigration() {
  await db.schema.classCreator().withClass(schemaConfig).do();
}


