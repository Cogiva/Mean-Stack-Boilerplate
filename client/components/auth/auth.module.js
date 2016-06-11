'use strict';

angular.module('hapnoteApp.auth', ['hapnoteApp.constants', 'hapnoteApp.util', 'ngCookies',
    'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
