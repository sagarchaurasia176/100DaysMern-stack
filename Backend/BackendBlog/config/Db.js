// mongoose import here
const mongoose = require("mongoose");
require("dotenv").config();

// create one () where I have add one falg and then after add some conditions so we get like
 const dbConnection = () => {
      mongoose.connect(process.env.DB_URL , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("db is create Succesfully !"))
    .catch(() => console.log("error raised in the db connections"));
};

module.exports = dbConnection;