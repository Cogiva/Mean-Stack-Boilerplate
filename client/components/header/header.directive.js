'use strict';

angular.module('hapnoteApp')
  .directive('header', () => ({
    templateUrl: 'components/header/header.html',
    restrict: 'E',
    controller: 'HeaderController',
    controllerAs: 'header'
  }));
