const express = require("express");
const RouteUserBlog = require("./routes/RouteUserBlog");
const app = express();
const port = 3000;
require('dotenv').config();

// app.get means to send the req to the db here so we get
app.get("/", (req, res) => {
  res.send("hey this express js");
});

// this shown the middleware here so we get,
app.use(express.json());
// routes data here so we get
app.use("/api/v2", RouteUserBlog);


// db connect apply here so we get this,
const dbConnect = require("../BackendPart-1/config/UserDb");
dbConnect();
//app run at this port
app.listen(port, () => {
  console.log("hey sagar");
});
