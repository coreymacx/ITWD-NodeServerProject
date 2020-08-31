const express = require("express");
const path = require("path");

const getCompliment = require("./api/compliments");
const getInsult = require("./api/insults");

const app = express();

app.get("/", function(req, res) {
  console.log("GET: '/'");
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/compliment", function(req, res) {
  console.log("GET: '/api/compliment'");
  res.json({
      compliment: getCompliment()
    }).end();
});

app.get("/api/insult", function(req, res) {
  console.log("GET: '/api/insult'");
  res.json({
    insult: getInsult()
  }).end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");
