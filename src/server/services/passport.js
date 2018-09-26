const passport = require('passport');
const EventbriteStrategy = require('passport-eventbrite-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.accessToken);
});

passport.deserializeUser(async (token, done) => {
  try {
    const user = await User.findOne({ accessToken: token });
    done(null, user);
  } catch (err) {
    console.log(err);
  }
});

passport.use(new EventbriteStrategy({
  clientID: keys.eventbriteClientID,
  clientSecret: keys.eventbriteClientSecret,
  callbackURL: 'http://localhost:3000/auth/eventbrite/callback'
},
(async (accessToken, refreshToken, extraParams, profile, done) => {
  try {
    const existingUser = await User.findOne({ eventbriteId: profile.id });

    if (existingUser) {
      done(null, existingUser);
    } else {
      const user = await new User({
        eventbriteId: profile.id, accessToken, name: profile.displayName
      }).save();
      done(null, user);
      console.log(profile, 'profile');
    }
  } catch (err) {
    console.log(err);
  }
}
)));
