const express = require("express");
const app = express();

const PORT = process.env.PORT || 5400;
const routers = require("./routes");
const DbConnect = require("./database");
app.use(express.json());
app.use(routers);
DbConnect();
app.listen(PORT, () => {
  console.log(`Listening on port on ${PORT}`);
});
