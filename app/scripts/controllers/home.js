'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
  .controller('HomeCtrl', function ($scope,$state,LoginService,$rootScope) {

$scope.fnLogin=function(){
	
	$state.go('login');   
};
});