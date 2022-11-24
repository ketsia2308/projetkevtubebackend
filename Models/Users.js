const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  profile: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", UserModel);

module.exports = User;
