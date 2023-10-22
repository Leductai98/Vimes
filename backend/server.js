const express = require("express");
const mongoose = require("mongoose");
const pool = require("./db");

var cors = require("cors");
const app = express();
const port = 5000;
const route = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
// app.get("/receipt", (req, res) => {
//   res.status(200).send({ message: "dasdasdas" });
// });
route(app)

pool.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
    return;
  }
  console.log("Connected to the database");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
