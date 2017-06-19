app.config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
      // .state('splash', {
      //     url: '/',
      //     templateUrl: 'splash.html',
      //     controller: 'homeCtrl'
      // })
      .state('home', {
        url: '/',
        templateUrl: 'components/home.html',
        controller: 'homeCtrl'
      })
      .state('demo', {
        url: '/demo',
        templateUrl: 'components/demoVideo.html',
        controller: 'homeCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'components/contact.html',
        controller: 'homeCtrl'
      })
      .state('streaming', {
        url: '/streaming',
        templateUrl: 'components/streaming.html',
        controller: 'homeCtrl'
      })
      .state('video1', {
        url: '/video1',
        templateUrl: 'components/video1.html',
        controller: 'appCtrl'
      })
      .state('video2', {
        url: '/video2',
        templateUrl: 'components/video2.html',
        controller: 'flatVideoCtrl'
      });
    $urlRouterProvider.otherwise('/');
  });