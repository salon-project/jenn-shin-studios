angular.module('jennShinApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home',{
          url:'/',
          templateUrl: "../views/home.html"
      })
      .state('services',{
          url:'/services',
          templateUrl: "../views/services.html"
      })
      .state('stylists',{
          url:'/stylists',
          templateUrl: "../views/stylists.html",
          controller:'stylistsCtrl'
      })
      .state('gallery',{
          url:'/gallery',
          templateUrl: "../views/gallery.html"
      })
      .state('info',{
          url:'/info',
          templateUrl: "../views/info.html"
      })
    $urlRouterProvider
      .otherwise('/');
  });

angular.module('jennShinApp')
  .controller('stylistsCtrl', function($scope, mainService){
    $scope.stylists = mainService.stylistInfo;
    console.log($scope.stylists);
    console.log('hello');
  })

angular.module('jennShinApp').service('mainService', function(){

    this.stylistInfo = [{
      name: "Jenn Shin",
      description: "MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!MY NAME IS JENN!!!",
      picture: "../images/jenn.png"
    },
    {
      name: "Cara",
      description: "MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!MY NAME IS CARA!!!",
      picture: "../images/jenn.png"
    }]
})

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
