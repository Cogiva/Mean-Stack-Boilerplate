'use strict';

(function() {

  class AdminController {
    constructor(User, common) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      this.common = common;
      common.setPageTitle("Admin");
    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('hapnoteApp.admin')
    .controller('AdminController', AdminController);
})();
