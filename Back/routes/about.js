const express = require("express");
const router = express.Router();

/* GET about page. */
const AboutController = require("../controllers/AboutController");
const controller = new AboutController();

router.get("/", (req, res) => controller.about(req, res));

module.exports = router;
