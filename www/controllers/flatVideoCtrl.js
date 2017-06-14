app.controller('flatVideoCtrl', [
  '$scope',
  '$state',
  '$ionicModal',
  '$ionicHistory',
  function($scope, $state, $ionicModal, $ionicHistory) {
    $scope.$on('$ionicView.beforeLeave', function() {
      screen.orientation.lock('portrait');
    });

    $scope.$on('$ionicView.beforeEnter', function() {
      screen.orientation.lock('landscape');
    });
    $scope.myGoBack = function() {
      var oldPlayer = document.getElementById('videojs-panorama-player');
      videojs(oldPlayer).dispose();
      window.history.back();
    };
    screen.orientation.lock('landscape');
  }
]);
