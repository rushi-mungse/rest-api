const Articles = require("../models/article");

class ArticleController {
  //Custom apis
  async article(req, res) {
    const { title, body, author } = req.body;
    console.log(req.body);
    const articles = new Articles({
      title,
      body,
      author,
    });

    //first method
    // articles.save((err, document) => {
    //   if (err) {
    //     throw err;
    //   }
    //   res.json(document);
    // });

    //Second Method
    // articles
    //   .save()
    //   .then((document) => {
    //     res.status(201).json(document);
    //   })
    //   .catch((err) => {
    //     throw err;
    //   });

    const document = await articles.save();
    res.status(201).json(document);
  }
}

module.exports = new ArticleController();
