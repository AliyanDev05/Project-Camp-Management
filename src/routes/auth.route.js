import { Router } from "express";
import {
  login,
  logoutUser,
  registerUser,
} from "../controllers/auth.controllers.js";
import {
  userRegisterValidation,
  UserLoginValidation,
} from "../validators/index.js";
import { validate } from "../middlewares/validate.middlewares.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidation(), validate, registerUser);
router.route("/login").post(UserLoginValidation(), validate, login);

//secure routes
router.route("/logout").post(verifyUser, logoutUser);

export default router;
