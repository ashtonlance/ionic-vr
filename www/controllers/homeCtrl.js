app.controller('homeCtrl', [
  '$scope',
  '$rootScope',
  '$state',
  '$ionicModal',
  '$ionicHistory',
  '$http',
  function($scope, $rootScope, $state, $ionicModal, $ionicHistory, $http) {
 
    $scope.myGoBack = function() {
      var oldPlayer = document.getElementById('videojs-panorama-player');
      videojs(oldPlayer).dispose();
      window.history.back();
    };

    $http
      .get('http://videoideas.com/videos/videos.json')
      .then(function success(response) {
        $rootScope.videos = response.data;
        $rootScope.videos = $rootScope.videos.files.mp4;
        console.log($rootScope.videos);
      });

    $scope.openVideo = function(source) {
      $rootScope.videoSource = source;
      console.log($rootScope.videoSource);
      $state.go('video1');
    };
  }
]);
