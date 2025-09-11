const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) next();
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashPassword;
  } catch (error) {
    next(error);
  }
});

userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { userId: this._id.toString(), email: this.email, isAdmin: this.isAdmin }, // payload
    process.env.JWT_SECRET, // secret key (from .env)
    { expiresIn: "1h" } // token expiry time
  );
  return token;
};
const User = new mongoose.model("User", userSchema);
module.exports = User;
