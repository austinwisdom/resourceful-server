import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { users?: mongoDB.Collection, resources?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING!
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const usersCollection: mongoDB.Collection = db.collection(
    process.env.USERS_COLLECTION_NAME!
  );

  const resourceCollection: mongoDB.Collection = db.collection(
    process.env.RESOURCES_COLLECTION_NAME!
  )

  collections.users = usersCollection;
  collections.resources = resourceCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} 
    and collection: ${usersCollection.collectionName} and ${resourceCollection.collectionName}`
  );
}
