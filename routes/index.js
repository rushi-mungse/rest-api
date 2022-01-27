const routers = require("express").Router();
const articleController = require("../controllers/articleController");

routers.post("/api/article", articleController.article);

module.exports = routers;
