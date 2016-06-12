'use strict';
(function(){

class UserhomeComponent {

  constructor($scope, Auth, common) {
    this.common = common;
    this.Auth = Auth;
    common.setPageTitle("Tasks");
    common.toggleMenu(false);
  }

}

angular.module('hapnoteApp')
  .component('userhome', {
    templateUrl: 'app/userhome/userhome.html',
    controller: UserhomeComponent
  });

})();
