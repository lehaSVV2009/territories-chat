const errorHandler = (err, req, res, next) => {
  console.error("Global Hanlder", err.message);

  console.error(err.message);

  if (!err.statusCode) {
    err.statusCode = 500;
  }

  // TODO add error codes
  res.status(err.statusCode).json({
    status: err.statusCode,
    message: err.message || "Unknown error occured"
  });
};

module.exports = errorHandler;
