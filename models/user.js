const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fileuploads");

const userSchema = mongoose.Schema({
  image: String,
});

module.exports = mongoose.model("user", userSchema);
