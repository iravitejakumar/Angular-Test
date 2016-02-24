'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('DashboardCtrl', function ($scope,$state,LoginService,$rootScope) {
  $scope.fnLogout=function(){
$rootScope.showMenu=true;
         LoginService.removeInfo();

         $state.go('home');
  }
})