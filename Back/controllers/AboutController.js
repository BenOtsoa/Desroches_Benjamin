const db = require(`../models/index.js`);
/**
 * Class Pages Controller
 */
class AboutController {
  /**
   * Page about
   * @param {*} req
   * @param {*} res
   */
  about(req, res) {
    res.render("pages/about");
  }
}

module.exports = AboutController;
