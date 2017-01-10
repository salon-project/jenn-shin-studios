angular.module('jennShinApp', ['ui.router'])

angular.module('jennShinApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../../views/headerTmpl.html'
    }
  })
