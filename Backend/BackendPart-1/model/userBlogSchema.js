// here we have to create the schemas so we get here
const mongoose = require("mongoose");
// now start to create the object where we stored the data
const blogSchema = new mongoose.Schema({
  //this is your entire schema here so we get
  title: {
    type: String,
    required: true,
    maxLength: 200,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
  },
  data: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
// schema exports here so we get
module.exports = mongoose.model("blogs", blogSchema);
