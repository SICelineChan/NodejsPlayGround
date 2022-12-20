const { MongoClient } = require("mongodb");
const url = process.env.MONGO_DB;

const client = new MongoClient(url);
const dbName = "sample_restaurants";

async function findSeafoodRestaurants(callback) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("restaurants");

  const findResult = await collection
    .find({
      cuisine: {
        $regex: "Seafood",
      },
      borough: {
        $regex: "Bronx",
      },
    })
    .toArray();

  callback(findResult);
}

module.exports = {
  findSeafoodRestaurants,
};
