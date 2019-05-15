var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var io = require("./io");
var errorHanlder = require("./errorHandler");
var indexRouter = require("./routes");

var app = express();
app.io = io;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.use(errorHanlder);

module.exports = app;
