'use strict';

class SettingsController {

  constructor(Auth, common) {
    this.Auth = Auth;
    this.common = common;
    common.setPageTitle("Settings.")
    common.toggleMenu(false);
  }

  changePassword(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          this.message = 'Password successfully changed.';
        })
        .catch(() => {
          form.password.$setValidity('mongoose', false);
          this.errors.other = 'Incorrect password';
          this.message = '';
        });
    }
  }
}

angular.module('hapnoteApp')
  .controller('SettingsController', SettingsController);
