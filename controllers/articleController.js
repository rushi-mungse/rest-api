const Articles = require("../models/article");

//Custom apis

class ArticleController {
  //post-articles
  async article(req, res) {
    const { title, body, author } = req.body;
    const articles = new Articles({
      title,
      body,
      author,
    });

    try {
      const document = await articles.save();
      res.status(201).json(document);
    } catch (err) {
      console.log(err);
    }
  }

  //get articles
  async getArticles(req, res, next) {
    try {
      const data = await Articles.find();
      res.status(201).json(data);
    } catch (error) {
      res.status(400).json({ Error: "something went wrong!" });
    }
  }

  //update-articles
  async updateArticles(req, res, next) {
    const { _id } = req.params;
    const { title, body, author } = req.body;
    if (!_id) {
      return res.status(400).json({ Error: "Id not font" });
    }
    try {
      const exist = await Articles.findOne({ _id });
      if (!exist) {
        res.status(400).json({ Error: "Article not found" });
      }
      const updateArticle = await Articles.updateOne(
        { _id },
        {
          title,
          body,
          author,
        }
      );
      res.status(201).json(req.body);
    } catch (err) {
      console.log(err);
      res.json({ Error: "Something went wrong!" });
    }
  }
}

module.exports = new ArticleController();
