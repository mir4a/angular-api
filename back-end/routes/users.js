var mongoose = require('mongoose');
var model = require('../models/user');
var User = mongoose.model('User');

var bodyParser = require('body-parser');
//
var cleanString = require('jsesc');

module.exports = function (app) {

  app.use(bodyParser.urlencoded());

  app.use(bodyParser.json());


  app.get('/api/users', function (req, res) {

    User.find().sort('created').limit(10).exec(function (err, users) {
      if (err) return next(err);

      res.send(users);
    });

  });

  app.post('/api/users', function (req, res, next) {
    var email = cleanString(req.param('_id'));
    var first_name = cleanString(req.param('first_name'));
    var last_name = cleanString(req.param('last_name'));

    console.log(req.body);

    User.findById(email, function(err, user) {
      if (err) return next(err);

      if (user) {
        return res.send({error:'exist', msg: 'user is already exist'});
      }

      console.log('User find by one');


      User.create({
        _id: email,
        first_name: first_name,
        last_name: last_name
      }, function (err, newUser) {
        if (err) {
          console.log(err);
          if (err instanceof mongoose.Error.ValidationError) {
            console.log(new Error('Mongoose validate error'));
          }
          return next(err);
        }

        console.log('created user: %s', newUser);
      });



    });

    console.log(req.body);

  });

};