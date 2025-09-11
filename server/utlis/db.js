const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection is successfully");
  } catch (error) {
    console.error();
    process.exit(0);
  }
};
module.exports = connectDB;
