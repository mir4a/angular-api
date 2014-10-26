angular
  .module('api.users', ['ngCookies'])
  .controller('UsersController', ['$http', '$cookies', UsersController]);

function UsersController($http, $cookies) {
  var self = this;
  self.notification = {};
  self.showNotification = false;
  self.user = {};
  self.items = [];
  self.totalUsers = 0;
  self.pages = [];
  self.page = $cookies.usersPage ? $cookies.usersPage : 0;

  self.saveUser = function () {

    $http.post('/api/users', {
      _id: self.user.email,
      first_name: self.user.first_name,
      last_name: self.user.last_name
    }).success(function (data, status, headers, config) {
      self.showNotification = true;
      self.notification = data;
      self.user = {};
      self.getUsers();
    }).error(function (data, status, headers, config) {
      console.error(data);
      console.error(status);
    });
  };

  self.getUsers = function (page, offset) {

    page = page ? page - 1 : self.page;
    offset = offset ? offset : 10;
    offset *= page;

    $cookies.usersPage = page;

    $http.get('/api/users/' + page, {})
      .success(function (data, status, headers, config) {
        var users = data.users;
        users.forEach(function(el,i,arr) {
          el.number = i + 1 + offset;
        });
        self.items = users;
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
  };

  self.removeUser = function (id) {
    var sure = confirm("Are you sure you want to remove user with email: " + id + "?");
    if (sure) {

    $http.post('/api/users', {_id: id, remove: true})
      .success(function (data, status, headers, config) {
        console.log(data);
        self.getUsers();
      })
      .error(function (data, status, headers, config) {
        alert("can't remove");
      })
    } else {
      console.log("it's your choice");
    }

  };

  self.getUsers();

}