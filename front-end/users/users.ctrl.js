angular
  .module('api.users')
  .controller('UsersController', ['$http', UsersController]);

function UsersController($http) {
  var self = this;

  self.messages = [];

  $http.get('api/users').success(function (data) {
    self.messages = data;
  }).error(function (err) {
    console.log(err);
  });

  self.saveUser = function() {
    console.log(self);

    $http.post('api/users', {
      _id: self.email,
      first_name: self.first_name,
      last_name: self.last_name
    }).success(function(data, status, headers, config) {
      console.log(data);
      console.log(status);
      console.log(headers);
      console.log(config);
    }).error(function(data, status, headers, config) {
      console.error(data);
      console.error(status);
    });
  }

}