import express, { Express } from "express";
import mongoose from "mongoose";
import db from "./db";
import cors from "cors";
import route from "./routes";
const app: Express = express();
const port: number = 5000;
// const route = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router
route(app);

db.authenticate().then(()=>{
    console.log("Connected to the database")
}).catch(err=>console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;