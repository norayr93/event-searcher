const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const path = require('path');

const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost:27017/eventbrite');

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, '../../dist')));
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
