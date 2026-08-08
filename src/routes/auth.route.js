import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { userRegisterValidation } from "../validators/index.js";
import { validate } from "../middlewares/validate.middlewares.js";

const router = Router();

router
  .route("/register")
  .post(userRegisterValidation(), validate, registerUser);

export default router;
