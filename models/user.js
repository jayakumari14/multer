const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fileuploads");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profilePic: {
    type: String,
    default: "default.png",
  },
});

module.exports = mongoose.model("user", userSchema);
