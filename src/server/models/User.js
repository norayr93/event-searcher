const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  eventbriteId: String,
  accessToken: String,
  name: String
});

mongoose.model('users', userSchema);
