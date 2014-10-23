angular
  .module('api.users')
  .controller('UsersController', ['$http', UsersController]);

function UsersController($http) {
  var self = this;
  self.notification = {};
  self.showNotification = false;
  self.user = {};
  self.items = [];
  self.totalUsers = 0;
  self.pages = [];

  self.saveUser = function () {

    $http.post('/api/users', {
      _id: self.user.email,
      first_name: self.user.first_name,
      last_name: self.user.last_name
    }).success(function (data, status, headers, config) {
      self.showNotification = true;
      self.notification = data;
      self.user = {};
    }).error(function (data, status, headers, config) {
      console.error(data);
      console.error(status);
    });
  };

  self.getUsers = function (page) {
    $http.get('/api/users/' + page, {})
      .success(function (data, status, headers, config) {
        self.items = data.users;
        self.totalUsers = data.total;
        self.pagination();
      })
      .error(function (data, status, headers, config) {
        console.error(data);
        console.error(status);
      });
  };

  self.pagination = function () {
    var k = 1;
    self.pages = [];
    for (var i = 0; i < self.totalUsers; i += 10) {
      self.pages.push(k);
      k++;
    }
  }

}