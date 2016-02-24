angular.module('angularTestApp')
.directive('customFooter', function() {
  return {
  	restrict: 'ECMA',
  	transclude:true,
  	scope:{},
    templateUrl:'views/footer.html'
  };
  });