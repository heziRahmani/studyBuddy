import express from "express";
import {
  addNewReactGeneralEntry,
  deleteFromReactGeneral,
  editReactGenerl,
  getAllReactGeneralData,
} from "../../controllers/reactControllers/reactGeneralController";
const router = express.Router();

router.route("/").get(getAllReactGeneralData).post(addNewReactGeneralEntry);

router
  .route("/:reactGeneralId")
  .put(editReactGenerl)
  .delete(deleteFromReactGeneral);

export default router;
