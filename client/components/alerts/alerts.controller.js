'use strict';

class AlertsController {
  //start-non-standard 
  constructor(common) {
  	this.common = common;
  }
}
 
angular.module('hapnoteApp')
  .controller('AlertsController', AlertsController);
