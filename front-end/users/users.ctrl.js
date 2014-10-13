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

}