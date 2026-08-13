import { User } from "../models/user.model.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/async-handler.js";
import jwt from "jsonwebtoken";

export const verifyUser = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer", "");

  if (!token) {
    throw new ApiError(401, "unauthorized User");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -emailVerificationToken -emailVerificationExpiry -refreshToken",
    );

    if (!user) {
      throw new ApiError(401, "unauthorized User");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "unauthorized User");
  }
});
