const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs"); // Fixed typo here
const User = require("../model/user.model");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ msg: "User not exist" }); // Added return
    }

    const isMatch = await bcrypt.compare(password, user.password); // Fixed typo here
    if (!isMatch) {
      return res.status(400).json({ msg: "Password does not match" });
    }

    const token = jwt.sign(
      { id: user._id }, // Correctly access user._id
      process.env.JWT_SECRET
    );

    return res.status(200).json({ msg: "Login successful", token }); // Changed message for clarity
  } catch (error) {
    console.error(error); // Log the error
    return res.status(500).json({ msg: "Server error" }); // Return server error
  }
};

module.exports = login;
