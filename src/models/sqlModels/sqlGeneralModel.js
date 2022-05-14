import mongoose from "mongoose";

const Schema = mongoose.Schema;

// used to crate nested types
const CodeSchema = new Schema({
  codedescription: { type: String },
  code: { type: String },
});

export const SqlGeneralSchema = new Schema({
  titel: {
    type: String,
    required: true,
  },
  code: [CodeSchema],
  ceatedAt: {
    type: Date,
    default: Date.now(),
  },
});
