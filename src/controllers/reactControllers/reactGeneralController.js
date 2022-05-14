import mongoose from "mongoose";
import { reactGeneralSchema } from "../../models/reactModels/reactGeneralModel";

const ReactGeneralMethode = mongoose.model(
  "reactGeneralMethode",
  reactGeneralSchema
);

//GET ALL
export const getAllReactGeneralData = (req, res) => {
  ReactGeneralMethode.find({}, (err, reactGeneralMethode) => {
    if (err) {
      console.log(err);
    } else {
      res.send(reactGeneralMethode);
    }
  });
};

//POST
export const addNewReactGeneralEntry = (req, res) => {
  let newReactGeneral = new ReactGeneralMethode(req.body);
  newReactGeneral.save((err, reactGeneralMethode) => {
    if (err) {
      res.send(err);
    } else {
      res.send(reactGeneralMethode);
    }
  });
};
//PUT
export const editReactGenerl = (req, res) => {
  ReactGeneralMethode.findOneAndUpdate(
    { _id: req.params.reactGeneralId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, reactGeneralMethode) => {
      if (err) {
        console.log(err);
      } else {
        res.send(reactGeneralMethode);
      }
    }
  );
};
//DELETE
export const deleteFromReactGeneral = (req, res) => {
  ReactGeneralMethode.remove(
    { _id: req.params.reactGeneralId },
    (err, reactMethod) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ massege: "method deleted" });
      }
    }
  );
};
