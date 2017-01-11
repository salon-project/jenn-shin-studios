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
  .directive('headerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: '../../views/headerTmpl.html'
    }
  })
