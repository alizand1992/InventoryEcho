const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const salt = 10;

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
  email: {
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

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  return bcrypt.hash(user.password, salt, (hashError, hash) => {
    if (hashError) {
      return next(hashError);
    }

    user.password = hash;

    return next();
  })
});

module.exports = User = mongoose.model("User", UserSchema);