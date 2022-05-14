import mongoose from "mongoose";
import { express_methodsSchema } from "../../models/expressModels/express_methods_Models";

const ExpressMethods = mongoose.model("expressMethods", express_methodsSchema);

//get all
export const getExpressMethodFromDataBase = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  ExpressMethods.find({}, (Error, expressMethod) => {
    if (Error) {
      console.log(Error);
    } else {
      res.send(expressMethod);
    }
  });
};
//get one
export const getExpressMethodFromDataBaseById = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  ExpressMethods.findById(
    req.params.expressmethodId,
    (Error, expressMethod) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send(expressMethod);
      }
    }
  );
};

//post to database
export const addExpressMethodToDataBase = (req, res) => {
  let newExpessMethod = new ExpressMethods(req.body);
  res.set("Access-Control-Allow-Origin", "*");
  newExpessMethod.save((Error, expressMethod) => {
    if (Error) {
      console.log(Error);
    } else {
      res.send(expressMethod);
    }
  });
};
//put res method
export const updateExpressMethod = (req, res) => {
  ExpressMethods.findOneAndUpdate(
    { _id: req.params.expressmethodId },
    req.body,
    { new: true, useFindAndModify: false },
    (Error, expressMethod) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send(expressMethod);
      }
    }
  );
};
//delete res method
export const deleteExpressMethod = (req, res) => {
  ExpressMethods.remove(
    { _id: req.params.expressmethodId },

    (Error, expressMethod) => {
      if (Error) {
        console.log(Error);
      } else {
        res.send({ massege: "method deleted" });
      }
    }
  );
};
