'use strict';

angular.module('hapnoteApp')
  .directive('alerts', () => ({
    templateUrl: 'components/alerts/alerts.html',
    restrict: 'E',
    controller: 'AlertsController',
    controllerAs: 'alerts'
  }));
