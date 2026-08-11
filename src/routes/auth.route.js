import { Router } from "express";
import { login, registerUser } from "../controllers/auth.controllers.js";
import {
  userRegisterValidation,
  UserLoginValidation,
} from "../validators/index.js";
import { validate } from "../middlewares/validate.middlewares.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidation(), validate, registerUser);
router.route("/login").post(UserLoginValidation(), validate, login);

export default router;
