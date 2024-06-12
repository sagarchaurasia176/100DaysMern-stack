const mongoose = require("mongoose");
// db connection apply here so we get
const dbConnection = () => {
  mongoose.connect( process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connect succesfully ");
    })
    .catch(() => {
      console.log("db connect error");
    });
};

module.exports = dbConnection;