var errors = require('./errors');
var users = require('./users' );

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.render(__dirname + '/../../front-end/templates/index.jade');
  });

  users(app);

  errors(app);

};