const express = require("express");
const { signupUser, signinUser, logout } = require("../controller/userController");
const authenticateToken = require("../middleware/authenticationUser");
const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin" , signinUser);
router.post("/logout", logout);
router.get('/dashboard', authenticateToken, (req, res) => {
  res.status(200).json({ msg: "Welcome to the dashboard", user: req.user });
});

module.exports = router