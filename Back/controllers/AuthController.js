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
  auth(req, res) {
    console.log("methode about authcontroller");
    db.Users.findAll().then(users => res.render("pages/auth", { users }));
  }

  signup(req, res) {
    console.log("dans signup");
    const datas = req.body;
    db.Users.create(datas).then(user => {
      console.log("object");
      console.log(datas);
      res.send("Tout est envoyé vers la bdd");
    });
  }
}

module.exports = AboutController;
