import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

async function getDb() {
  await client.connect();
  return client.db("tiles-gallery");
}

const db = await getDb();

export const auth = betterAuth({
  database: mongodbAdapter(db),
  emailAndPassword: {
    enabled: true,
  },
});