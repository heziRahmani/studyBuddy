import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const nodJsGeneralSchema = new Schema({
  titel: {
    type: String,
  },
});
