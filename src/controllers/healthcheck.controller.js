import { ApiResponse } from "../utils/apiResponse.js";

const healthcheck = (req, res) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, { message: "server is running" }));
  } catch (error) {
    console.log(error);
  }
};

export { healthcheck };
