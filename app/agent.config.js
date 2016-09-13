'use strict';

angular.
  module('kontrAgent').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/agent', {
          template: '<agent-list></agent-list>'
        }).
        when('/operation', {
          template: '<operation-type></operation-type>'
        }).
        when('/transaction', {
          template: '<transaction-journal></transaction-journal>'
        }).
        when('/login', {
          template: '<login></login>'
        }).
        otherwise({redirectTo:'/agent'});
    }
  ]);