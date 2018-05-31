const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", function(req, res, next) {
  router.get("/about", (req, res) => controller.about(req, res));
});

module.exports = router;
