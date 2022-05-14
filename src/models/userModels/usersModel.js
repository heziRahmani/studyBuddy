import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  hashPassword: {
    type: String,
    required: true,
  },
  last_connection: {
    type: Date,
    default: Date.now,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  userType: {
    type: String,
  },
});

/**
 * Auth function
 * compers the password that sent from the client and the one in the dataBase
 * @param {string} password => client enterd pass
 * @param {string} hashPassword => dataBase pass
 * @returns true/false
 */
UserSchema.methods.comparePassword = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};
