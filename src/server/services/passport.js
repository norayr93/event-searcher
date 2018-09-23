const passport = require('passport');
const EventbriteStrategy = require('passport-eventbrite-oauth').OAuth2Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.accessToken);
});

passport.deserializeUser((token, done) => {
  User.findOne({ accessToken: token })
    .then((user) => {
      done(null, user);
    });
});

passport.use(new EventbriteStrategy({
  clientID: keys.eventbriteClientID,
  clientSecret: keys.eventbriteClientSecret,
  callbackURL: 'http://localhost:3000/auth/eventbrite/callback'
},
((accessToken, refreshToken, extraParams, profile, done) => {
  User.findOne({ eventbriteId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ eventbriteId: profile.id, accessToken, name: profile.displayName })
          .save()
          .then(user => done(null, user));
      }
    });
  console.log(profile, 'profile');
}
)));
