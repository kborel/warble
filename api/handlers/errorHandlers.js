// Catch errors for async await routes
exports.catchErrors = fn => (req, res, next) =>
  fn(req, res, next).catch(next);
