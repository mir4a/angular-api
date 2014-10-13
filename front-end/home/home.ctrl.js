angular
  .module('api.home')
  .controller('HomeController', ['$http', HomeController]);

function HomeController($http) {
  var self = this;

  self.messages = [];

  $http.get('api/messages.json').success(function (data) {
    self.messages = data;
  }).error(function (err) {
    console.log(err);
  });

}