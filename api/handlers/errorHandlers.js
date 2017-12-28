// Catch errors for async await routes
exports.catchErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(next);

// Not Found Error Handler

exports.notFound = (req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

// Validation errors

exports.validationErrors = (err, req, res, next) => {
  if (!err.data) return next(err);
  res.status(err.statusCode).json({
    errors: err.data,
  });
};

// ProductionErrors

exports.productionErrors = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
};
