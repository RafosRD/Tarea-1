
(function () {
  var app = angular.module('starter', ['ionic','starter.controllers'])

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {

        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  //app.run(function($cordovaSplashscreen, $timeout) {
    //$timeout(function() {
      //$cordovaSplashscreen.hide()
    //}, 5000)
  //})

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'templates/signup.html',
        controller: 'SignupCtrl'
      })


      .state('tab.aboutus', {
        url: '/aboutus',
        views: {
          'tab-aboutus': {
            templateUrl: 'templates/tab-aboutus.html',
            controller: 'AboutusCtrl'
          }
        }
      })

      .state('tab.categories', {
        url: '/categories',
        views: {
          'tab-categories': {
            templateUrl: 'templates/tab-categories.html',
            controller: 'CategoriesCtrl'
          }
        }
      })
      .state('tab.contact', {
        url: '/contact',
        views: {
          'tab-contact': {
            templateUrl: 'templates/tab-contact.html',
            controller: 'ContactCtrl'
          }
        }
      })
      .state('tab.profile', {
        url: '/profile',
        views: {
          'tab-profile': {
            templateUrl: 'templates/tab-profile.html',
            controller: 'ProfileCtrl'
          }
        }
      });


    $urlRouterProvider.otherwise('/login');



  });


}());
