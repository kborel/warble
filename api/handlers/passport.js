const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/User');

passport.use(new JwtStrategy({
  secretOrKey: process.env.SECRET,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
}, async (jwtPayload, done) => {
  try {
    const user = User.query().findById(jwtPayload.id);
    return user ? done(null, user) : done(null, false);
  } catch (err) {
    return done(err, false);
  }
}));

