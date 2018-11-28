const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    index: {
      unique: true,
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_level: {
    type: Number,
    default: 1,
  },
  active: {
    type: Boolean,
    default: true,
    required: true,
  },
  joined_on: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("User", UserSchema);