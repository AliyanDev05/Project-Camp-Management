import dotenv from "dotenv";
import express from "./app.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

express.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});