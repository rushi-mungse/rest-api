const express = require("express");
const app = express();

const PORT = process.env.PORT || 5400;
const routers = require("./routes");
app.use(express.json());
app.use(routers);
app.listen(PORT, () => {
  console.log(`Listening on port on ${PORT}`);
});
