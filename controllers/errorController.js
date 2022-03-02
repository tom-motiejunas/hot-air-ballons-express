exports.notFound = (req, res, next) => {
  const errorCode = 404;
  res.status(errorCode);
  res.send("404 | Not found");
};
exports.internalServerError = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  res.status(error.statusCode).json({
    status: error.status,
    error: error,
    message: error.message,
    stack: error.stack,
  });
};
