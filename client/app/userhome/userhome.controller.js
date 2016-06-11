'use strict';
(function(){

class UserhomeComponent {

  constructor($scope, Auth) {
    this.message = 'Hello';  
    this.user    = Auth.getCurrentUser();  
  }

}

angular.module('hapnoteApp')
  .component('userhome', {
    templateUrl: 'app/userhome/userhome.html',
    controller: UserhomeComponent
  });

})();
