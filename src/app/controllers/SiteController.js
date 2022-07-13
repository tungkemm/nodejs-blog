import Account from "../models/Account"

class SiteController {

    // [GET] /
    home(req, res) {

        Account.find({}, function (err, account) {
            if(!err) {
                res.json(account)
            }
            else {
                res.status(400).json({ error: err })
            }
          });

        // res.json({name: "tung"})
        // res.render("home");
    }

    // [GET] /search
    search(req, res) {
        res.render("search");
    }

}

export default new SiteController