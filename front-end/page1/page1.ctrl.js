angular
  .module('api.page1')
  .controller('Page1Controller', ['$http', Page1Controller]);

function Page1Controller($http) {
  var self = this;

  self.users = [
    {
      "id"        : 1,
      "last_name" : "Smith",
      "first_name": "John",
      "email"     : "john@example.com"
    },
    {
      "id"        : 2,
      "last_name" : "Smith jr",
      "first_name": "Jane",
      "email"     : "jane@example.com"
    },
    {
      "id"        : 3,
      "last_name" : "McNamara",
      "first_name": "Jake",
      "email"     : "jake@example.com"
    },
    {
      "id"        : 4,
      "last_name" : "McNamara",
      "first_name": "Jake",
      "email"     : "jake@example.com"
    },
    {
      "id"        : 5,
      "last_name" : "McNamara",
      "first_name": "Jake",
      "email"     : "jake@example.com"
    },
    {
      "id"        : 6,
      "last_name" : "McNamara",
      "first_name": "Jake",
      "email"     : "jake@example.com"
    }
  ];

  self.getInfo = function (user) {
    alert('Hello, ' + user.first_name + '!');
  }

}
