const mongoose = require('mongoose');

const subscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
  },
  { timestamps: true }
);


const SubscribeModel = mongoose.model('Subscribe', subscribeSchema);
module.exports = SubscribeModel;

