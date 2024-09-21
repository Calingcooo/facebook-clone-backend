const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router();

router.post("/login", AuthController.userLogin);

module.exports = router;
