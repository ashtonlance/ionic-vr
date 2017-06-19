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
    };

    $scope.$on('$ionicView.beforeLeave', function() {
      screen.orientation.lock('portrait');
    });

    $scope.$on('$ionicView.beforeEnter', function() {
      screen.orientation.lock('landscape');
    });

    // screen.orientation.addEventListener('change', function() {
      setTimeout(function() {
        (function(window, videojs) {
          var player = (window.player = videojs('videojs-panorama-player', {}));
          console.log(player.panorama);
          var videoElement = document.getElementById('videojs-panorama-player');
          var width = videoElement.offsetWidth;
          var height = videoElement.offsetHeight;
          player.width(width), player.height(height);
          player.crossOrigin = 'Anonymous';

          player.playlist([
            {
              sources: [
                {
                  src: $rootScope.videoSource,
                  crossorigin: 'anonymous',
                  type: 'video/mp4'
                }
              ],
              poster: ''
            }
          ]);

          player.panorama({
            autoMobileOrientation: true,
            initFov: 100,
            initLat: -5,
            initLon: -180,
            showNotice: false
          });
        })(window, window.videojs);
      }, 500);
    // });
  }
]);
