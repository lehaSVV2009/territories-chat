var io = require("socket.io")();

io.on("connection", () => {
  console.log("User is connected");
});

module.exports = io;