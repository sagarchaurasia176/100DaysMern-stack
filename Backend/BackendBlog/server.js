const express = require("express");
const app = express();
require("dotenv").config();
const db = require("../BackendBlog/config/Db");
db();
// listenPort apply here so we get
app.listen(process.env.PORT, () => {
  console.log("server is running ");
});
app.get("/", (req, res) => {
  res.send("hey server is working on the webpage");
});
