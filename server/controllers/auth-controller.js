const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send(`this is index page`);
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({
        msg: "User Alreday Exsist",
      });
    }
    // const round = 10;
    // const genSalt = await bcrypt.genSalt(round);

    // const hashPassword = await bcrypt.hash(password, genSalt);
    const userObj = new User({
      username,
      email,
      password,
    });

    const savedUser = await userObj.save(); // <- fix here
    //     const userObj ={
    //         username,
    //         email,password
    //     }
    //   const savedUser = await User.create(userObj)

    if (savedUser) {
      res.status(201).json({
        msg: "Account Created Successfully",
        token: savedUser.generateToken(),
        userId: savedUser._id.toString(),
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//todo login controller

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({
        msg: "Invalid Credentials Email Or Password",
      });
    }
    const verifiedPassword = await bcrypt.compare(password, userExist.password);
    console.log(verifiedPassword);
    if (!verifiedPassword) {
      return res.status(400).json({
        msg: "Invalid Credentials Email Or Password",
      });
    }

    res.status(201).json({
      msg: "Login Successfully",
      token: userExist.generateToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const userData = async (req, res) => {
  try {
    const { userId, email, isAdmin } = req.user;
    const exsistUser = await User.findOne({ _id: userId }, { password: 0 });
    console.log(exsistUser);
    res.status(200).json(exsistUser);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { home, register, login, userData };
