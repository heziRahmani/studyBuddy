import express from "express";
import {
  addOneSqlGeneral,
  deleteOneSqlGeneral,
  editSqlGeneral,
  getAllSqlGeneralEntrys,
} from "../../controllers/sqlControllers/sqlGeneralController";
const router = express.Router();

router.route("/").get(getAllSqlGeneralEntrys).post(addOneSqlGeneral);
router
  .route("/:sqlGeneralId")
  .get(addOneSqlGeneral)
  .put(editSqlGeneral)
  .delete(deleteOneSqlGeneral);

export default router;
