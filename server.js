const express = require("express");
const app = express();

const PORT = process.env.PORT || 5400;

app.listen(PORT, () => {
  console.log(`Listening on port on ${PORT}`);
});
