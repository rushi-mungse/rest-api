const Articles = require("../models/article");

class ArticleController {
  article(req, res) {
    const { title, body, author } = req.body;

    const articles = new Articles({
      title,
      body,
      author,
    });

    articles.save((err, document) => {
      if (err) {
        throw err;
      }
      console.log(document);
      res.json(req.body);
    });
  }
}

module.exports = new ArticleController();
