const { MongoClient } = require("mongodb");
const url = process.env.MONGO_DB;

const client = new MongoClient(url);
const dbName = "noodleTravel";

async function findAll(callback) {
  await client.connect();
  console.log("NoodleTravelDB is connected to server");
  const db = client.db(dbName);
  const collection = db.collection("finalProjectHCS");
  // const cursor = collection.find(filter);
  // const cursor = db.collection("finalProjectHCS").find({}).toArray();
  const findResult = await collection.find({}).toArray();

  // await client.close();

  callback(findResult);
}
module.exports = {
  findAll,
};
