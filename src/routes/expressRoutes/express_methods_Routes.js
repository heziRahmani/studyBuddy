import {
  addExpressMethodToDataBase,
  deleteExpressMethod,
  getExpressMethodFromDataBase,
  getExpressMethodFromDataBaseById,
  updateExpressMethod,
} from "../../controllers/expressControllers/express_methods_Controllers";

import { loginRequired } from "../../controllers/userController/userController";
import express from "express";
const router = express.Router();
// const routes = (app) => {
//basic rotes
router
  .route("/")
  .get(
    (req, res, next) => {
      //midellware

      console.log(`Request form: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    },

    getExpressMethodFromDataBase
  )
  .post(addExpressMethodToDataBase);

//parameters routes
router
  .route("/:expressmethodId")
  .get(getExpressMethodFromDataBaseById)
  .put(updateExpressMethod)
  .delete(deleteExpressMethod);
// };

export default router;
