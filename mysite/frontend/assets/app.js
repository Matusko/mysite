/**
 * Created by qw on 4.5.2015.
 */
/**
 * Created by qw on 31.3.2015.
 */
'use strict';

/* App Module */

var myApp = angular.module('myApp', [
    'famous.angular',
    'ngRoute',
    'mysiteControllers',
]);

myApp.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
    $routeProvider.
      when('/uvod', {
        templateUrl: 'templates/uvod',
        controller: 'UvodCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  }]);