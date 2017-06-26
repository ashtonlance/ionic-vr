app.controller('appCtrl', [
  '$scope',
  '$rootScope',
  '$state',
  '$ionicModal',
  '$ionicHistory',
  function($scope, $rootScope, $state, $ionicModal, $ionicHistory) {
    $scope.myGoBack = function() {
      var oldPlayer = document.getElementById('videojs-panorama-player');
      videojs(oldPlayer).dispose();
      window.history.back();
      $ionicHistory.clearCache();
    };

    $scope.$on('$ionicView.beforeLeave', function() {
      screen.orientation.lock('portrait');
    });

    $scope.$on('$ionicView.beforeEnter', function() {
      screen.orientation.lock('landscape');
    });

    setTimeout(function() {
      (function(window, videojs) {
        var player = (window.player = videojs('videojs-panorama-player', {}));
        var videoElement = document.getElementById('videojs-panorama-player');
        var width = videoElement.offsetWidth;
        var height = videoElement.offsetHeight;
        player.width(width), player.height(height);
        player.src({ src: $rootScope.videoSource, type: 'video/mp4' });
        player.crossOrigin = 'Anonymous';

        player.panorama({
          autoMobileOrientation: true,
          initFov: 100,
          initLat: -5,
          initLon: -180,
          showNotice: false
        });
      })(window, window.videojs);
    }, 500);
  }
]);
