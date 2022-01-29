const routers = require("express").Router();
const articleController = require("../controllers/articleController");

routers.post("/api/article", articleController.article);
routers.get("/api/article", articleController.getArticles);
routers.patch("/api/article/:_id", articleController.updateArticles);

module.exports = routers;
