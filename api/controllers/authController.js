const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authenticate = passport.authenticate('jwt', { session: false });

exports.verify = (req, res) => res.json(req.user);

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.query().findOne({ username });
  if (user) {
    const isValid = await user.verifyPassword(password);
    if (isValid) {
      const token = await jwt.sign({ id: user.id }, process.env.SECRET);
      res.set('Authorization', `Bearer ${token}`).json(user);
      return false;
    }
  }
  res.status(401).json('username or password is invalid.');
  return false;
};
