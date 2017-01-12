angular.module('jennShinApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl: "../views/home.html"
        })
      
    $urlRouterProvider
        .otherwise('/');
});

angular.module('jennShinApp')
  .directive('footerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../../views/footerTmpl.html'
    }
  })

angular.module('jennShinApp')
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../../views/headerTmpl.html'
    }
  })
