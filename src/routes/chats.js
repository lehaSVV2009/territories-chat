var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.json([{ chatId: "456" }]);
});

router.get("/:chatId", function(req, res, next) {
  res.json({ chatId: req.params.chatId });
});

router.post("/", function(req, res, next) {
  res.status(201).json({ chatId: "123" });
});

router.put("/:chatId", function(req, res, next) {
  res.json({ chatId: req.params.chatId });
});

router.delete("/:chatId", function(req, res, next) {
  res.sendStatus(204);
});

module.exports = router;
