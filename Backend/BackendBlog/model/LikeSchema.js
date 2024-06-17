const mongoose = require("mongoose");

exports.LikeSchema = mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId(),
    ref: "PostSchema",
  },
  author: {
    type: mongoose.Schema.Types.String(),
    ref: "PostSchema",
  },
});
// create the model here

module.exports = mongoose.model("LikeSchema", LikeSchema);
