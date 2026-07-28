import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/async-handler.js";

const healthcheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "server is running" }));
});

export { healthcheck };
