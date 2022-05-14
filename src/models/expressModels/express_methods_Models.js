import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const express_methodsSchema = new Schema({
  methodName: {
    type: String,
    required: "missing a methodName",
  },
  methodDescription: {
    type: String,
    required: "missing a methodDescription",
  },
  methodCodeExsample: {
    type: Array,
    required: "missing a methodDescription",
  },
  methodCodeExsampleTitel: {
    type: String,
    required: "missing a methodDescription",
  },
  created_date: {
    type: Date,
    default: Date.now,
  },

  tag: {
    type: String,
    default: "express",
  },
});
