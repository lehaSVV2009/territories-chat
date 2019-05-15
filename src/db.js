var Datastore = require("nedb"); // in-memory db

var db = {
  chats: new Datastore(),
  messages: new Datastore()
};

module.exports = db;
