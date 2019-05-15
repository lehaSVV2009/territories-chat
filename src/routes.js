var express = require("express");
var router = express.Router();

var db = require("./db");
var io = require("./io");

// TODO create separate service layer
// TODO divide to parse request and format response
const toMessage = ({ chatId, username, text, creationDate }) => ({
  chatId,
  username: username || "No name",
  text: text || "",
  creationDate: creationDate || new Date()
});

router.get("/chats/:chatId/messages", function(req, res, next) {
  const { chatId } = req.params;
  db.messages.find({ chatId }, (err, messages) => {
    if (err) next(err);
    res.json(Array.isArray(messages) ? messages.map(toMessage) : []);
  });
});

router.post("/chats/:chatId/messages", function(req, res, next) {
  const { chatId } = req.params;
  const message = toMessage({ ...req.body, chatId });
  db.messages.insert(message, err => {
    if (err) next(err);
    io.emit("message", message);
    res.status(200).send(message);
  });
});

router.delete("/chats/:chatId", function(req, res, next) {
  const { chatId } = req.params;
  db.messages.remove({ chatId }, { multi: true }, err => {
    if (err) next(err);
    res.sendStatus(204);
  });
});

module.exports = router;
