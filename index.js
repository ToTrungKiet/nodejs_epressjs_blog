const express = require("express");
const app = express();
const port = 3001;

app.get("/favicon.ico", (req, res) => res.status(204));

app.get("/", (req, res) => {
  var a = 1;
  var b = 2;
  var c = a + b;
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// To run this code, make sure you have Node.js and Express installed.
