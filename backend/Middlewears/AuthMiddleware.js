const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false, message: "No token, please log in" });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(403).json({ status: false, message: "Invalid or expired token" });
    }

    const user = await User.findById(data.id);
    if (!user) {
      return res.status(403).json({ status: false, message: "User not found" });
    }

    req.user = user;
    next();
  });
};