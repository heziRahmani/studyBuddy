import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const reactGeneralSchema = new Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
  code: {
    type: Array,
    default: "",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});
