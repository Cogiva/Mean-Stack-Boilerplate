'use strict';

class LoginController {
  constructor(Auth, $location, common) {
    this.user = {};
    this.errors = {};
    this.submitted = false;
    this.common = common;

    this.Auth = Auth;
    this.$location = $location;
    common.setPageTitle("Login.");
    common.toggleMenu(false);
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          // Logged in, redirect to home
          this.$location.path('/userhome');
        })
        .catch(err => {
          this.errors.other = err.message;
        });
    }
  }
}

angular.module('hapnoteApp')
  .controller('LoginController', LoginController);
