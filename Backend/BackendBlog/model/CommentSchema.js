const mongoose = require("mongoose");

exports.PostSchema = mongoose.Schema({
     post: {
    type: mongoose.Schema.Types.ObjectId(),
    max: 100,
  },
});
// create the model here

module.exports = mongoose.model("CommentSchema", PostSchema);
