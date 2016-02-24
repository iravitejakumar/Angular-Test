angular.module('angularTestApp')
    .directive('customHeader', function() {
        return {
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
        };
    });
