const express = require("express");
const mongoose = require("mongoose");
const pool = require("./db")

var cors = require('cors')
const app = express();
const port = 5000;
const route=require("./routes")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
route(app)

// const mongoURL="mongodb://localhost:27027/pj5545?directConnection=true"

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
    return;
  }
  console.log('Connected to the database');
});

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
      });
// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("connect to MongoDB");
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

    