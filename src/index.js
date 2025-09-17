import dotenv from "dotenv";

dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";

connectDB()
  .then(process.env, PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  });
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error in DB connection");
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
})();
*/
