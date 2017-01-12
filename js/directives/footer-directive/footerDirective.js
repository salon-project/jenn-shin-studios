angular.module('jennShinApp')
  .directive('footerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../../views/footerTmpl.html'
    }
  })
