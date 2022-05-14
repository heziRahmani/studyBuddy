import express from "express";

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("this is from the node GET ");
  })
  .post((req, res) => {
    res.send("this is from the node POST ");
  });
router
  .route("/:nodegeneralid")
  .put((req, res) => {
    res.send("this is from the node POST ");
  })
  .delete((req, res) => {
    res.send("this is from the node POST ");
  });
