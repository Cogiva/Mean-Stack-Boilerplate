'use strict';
(function(){

class UserhomeComponent {

  constructor($scope, Auth, common) {
    this.message = 'Hello';  
    this.user    = Auth.getCurrentUser();  
    this.common = common;
    common.setPageTitle(this.user.name);
    common.toggleMenu(false);
  }

}

angular.module('hapnoteApp')
  .component('userhome', {
    templateUrl: 'app/userhome/userhome.html',
    controller: UserhomeComponent
  });

})();
