const mongoose = require("mongoose");
// post schema data apply here so we get
const likeSchemaData = mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("likeSchema", likeSchemaData);
