'use strict';

class SettingsController {

  constructor(Auth, common, $scope) {
    this.Auth = Auth;
    this.$scope = $scope;
    this.common = common;

    this.errors = {};
    this.currentUser = Auth.getCurrentUser();
    common.setPageTitle("Settings.")
    common.toggleMenu(false);
    this.newFileUpload = "";
    this.imageSaving = false;  

    var self = this;
    /*setTimeout(function(){ 
      console.log(self.currentUser);
      self.currentUser.profileimage = "Wibble";
      self.currentUser.name = "Test User Wibble";
      console.log(self.currentUser);
    }, 8000); */

    // SET UP LISTENER FOR FILE UPLOAD - ANGULAR BINDINGS NOT READY IN FILEUPLAOD
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        document.getElementById('profileimg').addEventListener('change', function(evt) {
            $('#profileUploader').click();
        }, false);
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
  }

  updateProfile(form) {
    var self = this;
    this.submitted = true;
    if (form.$valid) {
      this.Auth.updateProfile(this.currentUser.name, this.currentUser.email)
        .then(() => {
          self.common.setAlert("Saved", "success", "Your profile has been updated.", true, true)
        })
        .catch(() => {
          self.common.setAlert("Save Error", "danger", "Looks like there is a problem saving your profile. Please check the details and try again.", false, true)
        });
    }
  }

  changePassword(form) {
    var self = this;
    this.submitted = true;

    if (form.$valid) {
      this.Auth.changePassword(this.user.oldPassword, this.user.newPassword)
        .then(() => {
          self.common.setAlert("Saved", "success", "Your password has been updated.", true, true)
        })
        .catch(() => {
          self.common.setAlert("Save Error", "danger", "Looks like old password was not correct. Please check it and try again.", false, true)
        });
    }
  }
  
  uploadNewImage() {
    var self = this;
    var file = document.getElementById('profileimg').files[0];
    if (file) {
      var reader = new FileReader();

      reader.onload = function(readerEvt) {
          self.imageSaving = true;
          var binaryString = readerEvt.target.result;
          var savedImage = self.currentUser.profileimage;
          self.currentUser.profileimage = btoa(binaryString);
          self.$scope.$apply()
          // upload to DB
          self.Auth.updateImage(self.currentUser.profileimage)
            .then(() => {
              // ADD Alerts for success
              self.imageSaving = false;
            })
            .catch(() => {
              // ADD Alert for failure
              self.currentUser.profileimage = savedImage;
              self.common.setAlert("Save Error", "danger", "Looks like the image did not upload and save. Please try again.", false, true)
              self.imageSaving = false;
            });          
      };

      reader.readAsBinaryString(file);
    }
  }
}

angular.module('hapnoteApp')
  .controller('SettingsController', SettingsController);
