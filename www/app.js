var app = angular
  .module('starter', ['ionic'])
  .config([
    '$ionicConfigProvider',
    function($ionicConfigProvider) {
      $ionicConfigProvider.tabs.position('bottom');
      $ionicConfigProvider.views.transition('none');
    }
  ])
  .run(function($ionicPlatform, $state) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }

      ionic.Platform.fullScreen();
      // if (window.StatusBar) {
      //     return StatusBar.styleBlackTranslucent();
      // }
    });
  });
