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
