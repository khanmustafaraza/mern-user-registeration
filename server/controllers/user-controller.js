const User = require("../models/user-model");

const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    console.log(users);

    if (!users || users.length === 0) {
      // just pass a plain object as error
      return next({ message: "No users found in database", statusCode: 404 });
    }

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    // pass actual error with custom message
    next({ message: "Failed to fetch users", statusCode: 500 });
  }
};

// todo get a single user
const getUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log(id);
    if (!id) {
      next({ message: "User Id is required", statusCode: 404 });
    }
    const user = await User.findOne({ _id: id }, { password: 0 });
    if (!user) {
      // just pass a plain object as error
      return next({ message: "No user found in database", statusCode: 404 });
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next({ message: "Failed to Fetch User Details", statusCode: 500 });
  }
};

module.exports = { getAllUser, getUser };
