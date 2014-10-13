var mongoose = require('mongoose');
var validEmail = require('../helpers/validate/email');

var schema = mongoose.Schema({
  _id: { type: String, validate: validEmail },
  first_name: { type: String },
  last_name: { type: String },
  created: { type: Date, default: Date.now }
});

mongoose.model('User', schema);