import mongoose from "mongoose";
import { nodJsGeneralSchema } from "../../models/nodejsModels/nodJsGeneralModel";

const NodeGeneralMethod = mongoose.model("nodeGeneral", nodJsGeneralSchema);

//get all
export const getAllNodeGeneralData = (req, res) => {
  NodeGeneralMethod.find({}, (err, nodJsGeneralSchema) => {
    if (err) {
      console.log(err);
    } else {
      res.send(nodJsGeneralSchema);
    }
  });
};

//get one
export const getOneNodeGeneralEntry = (req, res) => {
  NodeGeneralMethod.findOne(
    { _id: req.body.nodegeneralid },
    (err, nodegeneral) => {
      if (err) {
        console.log(err);
      } else {
        res.send(nodegeneral);
      }
    }
  );
};

//add
export const addNodeGeneral = (req, res) => {
  let newNodeGeneral = new NodeGeneralMethod(req.body);
  newNodeGeneral.save((err, nodegeneral) => {
    if (err) {
      console.log(err);
    } else {
      res.send(nodegeneral);
    }
  });
};
