var Datastore = require("nedb"); // in-memory db

var db = {
  messages: new Datastore()
};

module.exports = db;
