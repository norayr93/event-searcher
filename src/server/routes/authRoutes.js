const passport = require('passport');

module.exports = (app) => {
  app.get('/auth/eventbrite',
    passport.authenticate('eventbrite', {}));

  app.get('/auth/eventbrite/callback',
    passport.authenticate('eventbrite', { failureRedirect: '/' }),
    (req, res) => {
      if (!req.user) {
        throw new Error('user null');
      }
      res.redirect('/dashboard');
    });

  app.get('/api/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
