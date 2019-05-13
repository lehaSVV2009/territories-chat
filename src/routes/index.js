var express = require('express');
var router = express.Router();

router.get('/chats', function(req, res, next) {
  res.json([{ id: '456' }]);
});

router.get('/chats/:id', function(req, res, next) {
  res.json({ id: req.params.id });
});

router.post('/chats', function(req, res, next) {
  res.status(201).json({ id: '123' });
});

router.put('/chats/:id', function(req, res, next) {
  res.json({ id: req.params.id });
});

router.delete('/chats/:id', function(req, res, next) {
  res.sendStatus(204);
});

module.exports = router;
