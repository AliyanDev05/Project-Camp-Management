import { body } from "express-validator";

const userRegisterValidation = () => {
  return [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required")
      .isLength({ min: 3, max: 30 })
      .withMessage("username must be 3 characters"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("email is incorrect"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ];
};

const UserLoginValidation = () => {
  return [
    body("email")
      .optional()
      .notEmpty()
      .withMessage("email or username is required"),
    body("password").notEmpty().withMessage("password is required"),
  ];
};

export { userRegisterValidation, UserLoginValidation };
