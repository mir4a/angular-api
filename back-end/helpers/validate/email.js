var validator = require('validator');

module.exports = function (email) {
  return validator.isEmail(email);
};