'use strict';

describe('Component: UserhomeComponent', function () {

  // load the controller's module
  beforeEach(module('hapnoteApp'));

  var UserhomeComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UserhomeComponent = $componentController('UserhomeComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
