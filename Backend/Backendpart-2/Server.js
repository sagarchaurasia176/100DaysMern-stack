// express js crucial here,
const express = require("express");
const app = express();
require("dotenv").config();

app.listen(process.env.PORT_NUM, () => {
  console.log("server start");
});
// middleware call here so we get
app.use(express.json());
// import the routes here so we get
const router = require("../Backendpart-2/routes/BlogRoute");
app.use("/api/datas",router);
// send the request to the webpage here so er get
app.get("/", (req, res) => {
  res.send("hey this is express");
});

const DbConnections = require("../Backendpart-2/config/userDb");
DbConnections();


