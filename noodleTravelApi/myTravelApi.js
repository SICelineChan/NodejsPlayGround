const { MongoClient } = require("mongodb");
const url = process.env.MONGO_DB;

var axios = require("axios");
var data = JSON.stringify({
  collection: "<COLLECTION_NAME>",
  database: "<DATABASE_NAME>",
  dataSource: "Cluster0",
  projection: {
    _id: 1,
  },
});

var config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-fxgbg/endpoint/data/v1/action/findOne",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": "<API_KEY>",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
