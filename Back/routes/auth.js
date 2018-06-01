const express = require("express");
const router = express.Router();

/* GET auth page. */
const AuthController = require("../controllers/AuthController");
const controller = new AuthController();

router.get("/", (req, res) => {
  console.log("je suis dans le get");
  controller.auth(req, res);
});

router.post("/", (req, res) => {
  console.log("je suis dans le post");
  controller.signup(req, res);
});

module.exports = router;
