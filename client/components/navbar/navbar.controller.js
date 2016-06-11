'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard 
  constructor($location, Auth, common) {
    this.$location = $location;
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.common = common;
  }

  isActive(route) {
    return route === this.$location.path();
  }
}

angular.module('hapnoteApp')
  .controller('NavbarController', NavbarController);
