import express from "express";
import {
  getAllUsers,
  login,
  loginRequired,
  register,
} from "../../controllers/userController/userController";

const router = express.Router();
// const userRoutes = (app) => {
router.route("/").get(getAllUsers);
router.route("/rgister").post(register);
router.route("/login").post(login);
// };

export default router;
