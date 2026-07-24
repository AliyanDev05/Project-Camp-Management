import dotenv from "dotenv";
import app from "./app.js";
import ConnectDb from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

ConnectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening to port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1);
  });
