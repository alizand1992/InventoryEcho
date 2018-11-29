const express = require("express");
const router = express.Router();

// Item Model
const User = require("../../models/User");

router.post("/login", (req, res) => {
  User.where({ email: req.body.email, password: req.body.password }) //Find all values in MongoDB
      .then(user => res.json(user)); //parse items into json format
});

router.post("/logout", (req, res) => {

});

module.exports = router;
