'use strict';

class HeaderController {
  //end-non-standard

  //start-non-standard 
  constructor($location, Auth) {
    this.title = "Header.";
  }
}

angular.module('hapnoteApp')
  .controller('HeaderController', HeaderController);
