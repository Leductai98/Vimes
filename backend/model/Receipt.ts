import { Sequelize, DataTypes } from "sequelize";
import db from "../db";

const Receipt = db.define("receipt", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  organize: {
    type: DataTypes.STRING,
  },
  dept: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  number: {
    type: DataTypes.BIGINT,
  },
  deliver_name: {
    type: DataTypes.STRING,
  },
  warehouse_name: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  maker_name: {
    type: DataTypes.STRING,
  },
  owner_warehouse_name: {
    type: DataTypes.STRING,
  },
  account_name: {
    type: DataTypes.STRING,
  },
});

Receipt.sync().then(() => {
  console.log("table receipt created");
});

export default Receipt;
