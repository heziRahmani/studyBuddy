import mongoose from "mongoose";
import { SqlGeneralSchema } from "../../models/sqlModels/sqlGeneralModel";

const SqlGeneralMethod = mongoose.model("sqlGeneral", SqlGeneralSchema);

//get all
export const getAllSqlGeneralEntrys = (req, res) => {
  SqlGeneralMethod.find({}, (err, sqlGeneral) => {
    if (err) {
      console.log(err);
    } else {
      res.send(sqlGeneral);
    }
  });
};

//get one
export const getSingleSqlGeneralEntries = (req, res) => {
  SqlGeneralMethod.findById(
    { _id: req.params.sqlGeneralId },
    (err, sqlGeneral) => {
      if (err) {
        console.log(err);
      } else {
        res.send(sqlGeneral);
      }
    }
  );
};

//Add one
export const addOneSqlGeneral = (req, res) => {
  console.log("hezi");
  console.log(req.body);
  const newSqlGeneral = new SqlGeneralMethod(req.body);
  newSqlGeneral.save((err, sqlGeneral) => {
    console.log(sqlGeneral);
    if (err) {
      console.log(err);
    } else {
      res.send(sqlGeneral);
    }
  });
};
//Edit
export const editSqlGeneral = (req, res) => {
  SqlGeneralMethod.findOneAndUpdate(
    { _id: req.params.sqlGeneralId },
    req.body,
    { new: true, useFindAndModify: false },
    (err, sqlGeneral) => {
      if (err) {
        console.log(err);
      } else {
        res.send(sqlGeneral);
      }
    }
  );
};
//delete one
export const deleteOneSqlGeneral = (req, res) => {
  SqlGeneralMethod.findOneAndDelete({ _id: req.params.sqlGeneralId }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ message: "Entry Deleted" });
    }
  });
};
