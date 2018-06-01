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
    db.Users.findAll().then(users => res.render("pages/about", { users }));
  }
}

module.exports = AboutController;
