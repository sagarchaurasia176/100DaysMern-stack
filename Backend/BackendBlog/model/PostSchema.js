const mongoose = require("mongoose");

exports.PostSchema = mongoose.Schema({
  title: {
    type: String,
    date: Date.current(),
  },
  author: {
    type: String,
    date: Date.current(),
  },
  Description: {
    type: String,
    max: 100,
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId(),
      ref: "LikeSchema",
    },
  ],
  Comment: [
    {
      type: mongoose.Schema.Types.ObjectId(),
      ref: "CommentSchema",
    },
  ],
});
// create the model here

module.exports = mongoose.model("PostSchema", PostSchema);
