// server js
const express = require("express");
const app = express();
const BlogRouter = require("../BlogBackend/Routes/ControllerRoutes");

require("dotenv").config();
// mdlledware to check the req and res
app.use(express.json());
// routes connections
app.use("/BlogRouter", BlogRouter);

const dbConnection = require("../BlogBackend/Config/db");
dbConnection();
// setup the connection here
app.listen(process.env.PORT_NUM, () => {
  console.log("server is running....");
});
// send the req to the webpage
app.get("/", (req, res) => {
  res.send("welcome to techify blog");
});
