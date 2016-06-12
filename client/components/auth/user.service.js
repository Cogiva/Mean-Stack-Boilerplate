'use strict';

(function() {

  function UserResource($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    }, {
      changePassword: {
        method: 'PUT',
        params: {
          controller: 'password'
        }
      },
      updateImage: {
        method: 'PUT',
        params: {
          controller: 'image'
        }
      },
      updateProfile: {
        method: 'PUT',
        params: {
          controller: 'profile'
        }
      },
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('hapnoteApp.auth')
    .factory('User', UserResource);
})();
