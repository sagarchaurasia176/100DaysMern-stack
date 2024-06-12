const mongoose = require("mongoose");
const blogModel = mongoose.Schema({
  title: {
    type: String,
    requrired: true,
    max: 100,
  },
  author: {
    type: String,
    required: true,
    max: 100,
  },
  
});

// syntax of module exports here
module.exports = mongoose.model("blogModel", blogModel);
