const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controller/authcontroller");

router.post("/loginAdmin", loginAdmin);

module.exports = router;