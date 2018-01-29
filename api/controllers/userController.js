const User = require('../models/User');

exports.register = async (req, res, next) => {
  const { password, ...rest } = req.body;
  await User.query().insert({
    ...rest,
    hash: password,
  });
  next();
};
