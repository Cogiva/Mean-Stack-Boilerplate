'use strict';
(function(){

class UserhomeComponent {

  constructor($scope) {
    this.message = 'Hello';
  }

}

angular.module('hapnoteApp')
  .component('userhome', {
    templateUrl: 'app/userhome/userhome.html',
    controller: UserhomeComponent
  });

})();
