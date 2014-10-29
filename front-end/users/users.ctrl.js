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
  self.page = $cookies.usersPage ? parseFloat($cookies.usersPage) : 0;

//  TODO: move to service all post requests (may be)
  /**
   * Sending POST request with new user's data to server api. Takes users model as data.
   */
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

  /**
   * Sending GET request with page number and offset params to server api.
   * @param {(number|string)} page - page number for navigating through users collection
   * @param {(number|string)} [offset=10] offset - represents how many users should be returned from server. By default is 10.
   */
  self.getUsers = function (page, offset) {

    page = page ? page : self.page;
    $cookies.usersPage = page;
    if (page > 0) {
      page = page -1;
    }
    offset = offset ? offset : 10;
    offset *= page;


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

  /**
   * Helper method for calculate of number of pages for simple pagination
   * @param {(number|string)} [offset=10] offset - represents how many users should be shown on page. By default is 10.
   */
  self.pagination = function (offset) {
    var k = 1;
    offset = offset ? offset : 10;
    self.pages = [];
    for (var i = 0; i < self.totalUsers; i += offset) {
      self.pages.push(k);
      k++;
    }
  };

  /**
   * Remove user method on view. Sending POST request with remove parameter.
   * @param {string} id - user's id (email)
   */
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