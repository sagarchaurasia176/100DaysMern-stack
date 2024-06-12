const mongoose = require("mongoose");
require("dotenv").config();

// create db connection
const DbConnectWithMongoose = () => {
  mongoose.connect(process.env.DB_URL,  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connection succefully");
    })
    .catch(() => {
      console.log("db not connect properly");
    });
};

module.exports = DbConnectWithMongoose;
