'use strict';

angular.module('hapnoteApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/userhome', {
        template: '<userhome></userhome>',
      	authenticate: true        
      });
  });
