import { Sequelize, DataTypes } from "sequelize";
import db from "../db";

const Product = db.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  receipt_id: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  unit: {
    type: DataTypes.STRING,
  },
  count: {
    type: DataTypes.BIGINT,
  },
  real_count: {
    type: DataTypes.BIGINT,
  },
  price: {
    type: DataTypes.BIGINT,
  },
  code_number: {
    type: DataTypes.BIGINT,
  },
});

Product.sync().then(() => {
  console.log("table product created");
});

export default Product;
