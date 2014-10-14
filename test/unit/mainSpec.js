describe('Unit: UserController', function () {

  beforeEach(module('api'));

  var ctrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {

    scope = $rootScope.$new();

    ctrl = $controller('UsersController', {
      $scope: scope
    });

  }));

  it('scope should deifned',
    function () {
    expect(scope.toBeDefined);
  });

  it('controller should be defined', function () {
    expect(ctrl.getUsers.toBeDefined);
  });

});