const mongoose = require("mongoose");
// post schema data apply here so we get
const postSchemaData = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('postSchemaData', postSchemaData)
