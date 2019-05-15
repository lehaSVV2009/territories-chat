var express = require("express");
var router = express.Router();

var db = require("../db");
var io = require("../io");

// TODO create separate service layer
// TODO divide to parse request and format response
const toMessage = ({ username, text, creationDate }) => ({
  username: username || "No name",
  text: text || "",
  creationDate: creationDate || new Date()
});

router.get("/", function(req, res, next) {
  db.messages.find({}, (err, messages) => {
    if (err) next(err);
    res.json(Array.isArray(messages) ? messages.map(toMessage) : []);
  });
});

router.post("/", function(req, res, next) {
  const message = toMessage(req.body);
  db.messages.insert(message, err => {
    if (err) next(err);
    io.emit("message", message);
    res.status(200).send(message);
  });
});

module.exports = router;
