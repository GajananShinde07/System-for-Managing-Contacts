// This will catch error if any and it will pass it to errorHandler
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/userModel");

// @desc Register user
// @route POST /api/users
// @access public

const registerUSer = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fileds are mandatory");
  }

  const checkUser = await UserModel.findOne({ email });
  if (checkUser) {
    res.status(400);
    throw new Error("User Email already exist!");
  }

  const registeredUser = await UserModel.create({
    username,
    email,
    password,
  });
  res.json({ UserRegistered: registeredUser });
});

// @desc Login user
// @route POST /api/users
// @access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Login" });
});

// @desc Current user
// @route GET /api/users
// @access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUSer, loginUser, currentUser };
