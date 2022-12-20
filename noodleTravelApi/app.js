require("dotenv").config();
const express = require("express");
const restaurantsDB = require("./restaurantsDB");
const myTravelDB = require("./myTravelDB");

const app = express();
const port = process.env.Port || 3000;

// app.get("/", async function (req, res) {
//   restaurantsDB.findSeafoodRestaurants(function (result) {
//     res.json(result);
//   });
// });

app.get("/", async function (req, res) {
  myTravelDB.findAll(function (result) {
    res.json(result);
  });
});

app.listen(port, function () {
  console.log(`listening to port ${port}!`);
});
