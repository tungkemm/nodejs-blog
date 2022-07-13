class NewsController {

    // [GET] /news
    index(req, res) {
        res.render("news");
    }

    // [GET] /news/:title
    show(req, res) {
        res.send("detail new")
    }

}

export default new NewsController