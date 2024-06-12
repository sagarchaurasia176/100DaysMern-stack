const mongoose = require("mongoose");
const userBlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 100,
  },
  description: {
    type: String,
    required: true,
    maxlength: 100,
  },
});
// export the schema
module.exports = mongoose.model("blogSchema", userBlogSchema);