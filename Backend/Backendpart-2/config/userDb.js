// connection with the mongo dn here
const mongoose = require('mongoose')
// create the functions
const DbConnections = () => {
  mongoose
    .connect(process.env.DB_URL,{
      // here parser it means create the params in the url
      useNewUrlParser: true,
      // here topology means create the layers
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("db connect ");
    })
    .catch(() => {
      console.log("db not connect");
    });
};
// exports the db here
module.exports = DbConnections;
