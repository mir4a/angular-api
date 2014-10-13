angular
  .module('api')
  .config(config);

function config($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    }).
    when('/page1', {
      templateUrl: 'page1/page1.html',
      controller: 'Page1Controller',
      controllerAs: 'test'
    }).
    when('/users', {
      templateUrl: 'users/users.html',
      controller: 'UsersController',
      controllerAs: 'users'
    })
}