const express = require("express");
const router = express.Router();

// User Model
const User = require("../../models/User");

router.post("/login/", (req, res) => {
  User.where({ email: req.body.email, password: req.body.password })
      .then(user => res.json(user));
});

router.post("/logout/", (req, res) => {

});

module.exports = router;
