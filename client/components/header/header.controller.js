'use strict';

class HeaderController {
  //end-non-standard

  //start-non-standard 
  constructor(common) {
    this.title = "Header.";
    this.common = common;
  }
}

angular.module('hapnoteApp')
  .controller('HeaderController', HeaderController);
