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
      .state('video1', {
        url: '/video1',
        templateUrl: 'components/video1.html',
        controller: 'appCtrl'
      })
      .state('video2', {
        url: '/video2',
        templateUrl: 'components/video2.html',
        controller: 'flatVideoCtrl'
      })
      .state('video3', {
        url: '/video3',
        templateUrl: 'components/video3.html',
        controller: 'appCtrlMontage'
      })
      .state('video4', {
        url: '/video4',
        templateUrl: 'components/video4.html',
        controller: 'appCtrlCard'
      })
      .state('video5', {
        url: '/video5',
        templateUrl: 'components/video5.html',
        controller: 'appCtrlRubyFalls'
      })
      .state('video6', {
        url: '/video6',
        templateUrl: 'components/video6.html',
        controller: 'appCtrlMannHummel'
      })
      .state('video7', {
        url: '/video7',
        templateUrl: 'components/video7.html',
        controller: 'appCtrlMannHummel'
      });
    $urlRouterProvider.otherwise('/');
  });