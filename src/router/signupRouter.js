const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signup");
// const { body } = require("express-validator");

router.get("/register", (req, res) => {
  res.json("Register");
});
router.post("/register", signupController.CreateUser);
module.exports = router;
