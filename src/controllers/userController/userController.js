import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserSchema } from "../../models/userModels/usersModel";

const User = mongoose.model("users", UserSchema);

//routs
export const getAllUsers = (req, res, next) => {
  User.find({}, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.send(user);
    }
  });
};
/**
 * checkes if a user logdIn
 *if loged contus to the nexet func
 * @returns status 401 and a message
 */
export const loginRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthoried user!" });
  }
};

/**
 * user registreition
 *
 * @returns user
 */
export const register = (req, res) => {
  console.log("hezi");
  console.log(req.body);
  const newUser = new User(req.body);
  console.log(newUser);
  newUser.hashPassword = bcrypt.hashSync(req.body.password, 10);

  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({ message: err });
    } else {
      user.hashPassword = undefined;
      return res.json(user);
    }
  });
};

export const login = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      console.log(user);
      if (err) {
        throw err;
      }
      if (!user) {
        res.status(401).json({ message: "Authentication filed no user found" });
      } else if (user) {
        if (!user.comparePassword(req.body.password, user.hashPassword)) {
          res
            .status(401)
            .json({ message: "Authentication filed wrong password" });
        } else {
          res.json({
            token: jwt.sign({ email: user.email, _id: user.id }, "theWitcher"),
          });
        }
      }
    }
  );
};
