var mongoose = require('mongoose');
var model = require('../models/user');
var User = mongoose.model('User');

var bodyParser = require('body-parser');
//
var cleanString = require('jsesc');

module.exports = function (app) {

  app.use(bodyParser.urlencoded());

  app.use(bodyParser.json());


  app.get('/api/users/:page', function (req, res) {
    var page = req.params.page;
    var limit = 10;
    var offset = page * limit;
    User.count({}, function (err, count) {
      if (err) return next(err);

      console.log("Number of users:", count);
      console.log("Offset:", offset);
      console.log("limit:", limit);

      User.find().sort('created').skip(offset).limit(limit).exec(function (err, users) {
        if (err) return next(err);

        res.json({users: users, total: count});
      });
    });

  });

  app.post('/api/users', function (req, res, next) {
    var email = cleanString(req.param('_id'));
    var first_name = cleanString(req.param('first_name'));
    var last_name = cleanString(req.param('last_name'));

    console.log(req.body);

    User.findById(email, function (err, user) {
      if (err) return next(err);

      if (user) {
        return res.json({error: 'exist', msg: 'user is already exist'});
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
            var error = new Error('Mongoose validate error');
            console.log(error);
            res.json({error: error.name, msg: error.message});
          }
          return next(err);
        }

        console.log('created user: %s', newUser);
        return res.json({msg: 'Well done!'});
      });


    });

    console.log(req.body);

  });

};