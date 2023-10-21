const mongoose = require("mongoose");

const listSchema = mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
    },
    symbol: {
      type: String,
    },
    block_date: {
      type: String,
    },
    price: {
      type: Number,
    },
    rsi: {
      type: Number,
    },
  },
  { collection: "token_indicator_rsi" },
  {
    timestamps: true,
  }
);


const List = mongoose.model("list", listSchema);

module.exports = List;
