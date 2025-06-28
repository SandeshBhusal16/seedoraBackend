const mongoose = require("mongoose");

const bookCallSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    datetime: { type: Date, required: true },
    message: { type: String },
  },
  {
    timestamps: true,
  }
);

const BookCallModel = mongoose.model("BookCall", bookCallSchema);
module.exports = BookCallModel;