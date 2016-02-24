'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */
angular.module('angularTestApp')
    .controller('LoginCtrl', function($scope, $state, LoginService,$rootScope) {
        console.log('In ctrl');
            
        $scope.data = {};
        $scope.fnSubmit = function() {
            console.log('in fun');
$rootScope.showMenu=false;
            LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                LoginService.setUserDetails($scope.data.username, $scope.data.password);
                console.log($scope.data.username);
                console.log($scope.data.password);

                $state.go('dashboard');
            }).error(function(data) {
                alert('Get Lost');
            });
        };
        if($state.is('login')){
            $rootScope.showMenu=true;
        LoginService.removeInfo();
            }
    });
