import mongoose from "mongoose";

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ connection Successfull");
  } catch (error) {
    console.error(error, "❌ connection Failed");
    throw error;
  }
};

export default ConnectDb;
