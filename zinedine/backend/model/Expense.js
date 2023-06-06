const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ExpSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date,
    required:true
    // default: Date.now
  }
});

module.exports = Expense = mongoose.model("exps", ExpSchema);
