const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

router.post("/login/", (req, res) => {
  User.where({ email: req.body.email })
      .then(user => res.json(user));
});

router.post("/logout/", (req, res) => {

});

router.post("/create/", (req, res) => {
  console.log(req.body);
  const newUser = {};

  if (req.body.email) newUser.email = req.body.email;
  if (req.body.password && req.body.password == req.body.r_password) newUser.password = req.body.password;
  if (req.body.first_name) newUser.first_name = req.body.first_name;
  if (req.body.last_name) newUser.last_name = req.body.last_name;

  new User(newUser).save().then((user) => res.json(user));
});

module.exports = router;
