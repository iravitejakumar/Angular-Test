'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('HeaderCtrl', function($scope, $state, LoginService, $rootScope) {
        $rootScope.showMenu = true;
        $scope.data1 = function() {

            $scope.login = LoginService.getUserDetails();
            console.log($scope.login.uname);
        }
    })
    .filter('helloFilter', function() {
        return function(input) {
            return ('Hello Boss' + input || '');
        }
    })
