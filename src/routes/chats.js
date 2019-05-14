var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json([{ id: '456' }]);
});

router.get('/:id', function(req, res, next) {
  res.json({ id: req.params.id });
});

router.post('/', function(req, res, next) {
  res.status(201).json({ id: '123' });
});

router.put('/:id', function(req, res, next) {
  res.json({ id: req.params.id });
});

router.delete('/:id', function(req, res, next) {
  res.sendStatus(204);
});

module.exports = router;
