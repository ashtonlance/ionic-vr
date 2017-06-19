app.controller('homeCtrl', [
  '$scope',
  '$rootScope',
  '$state',
  '$ionicModal',
  '$ionicHistory',
  '$http',
  function($scope, $rootScope, $state, $ionicModal, $ionicHistory, $http) {
    $scope.localVideos = {
      'Card Monroe': {
        source: 'videos/CardMonroe.mp4',
        label: 'Card Monroe 360',
        thumbnail: 'img/thumbnailcardmonroenoplay.png'
      },
      'VIP Montage': {
        source: 'videos/VIPMontage.mp4',
        label: 'VIP Montage',
        thumbnail: 'img/thumbnailmontagenoplay.png'
      },
      'Mann Hummel': {
        source: 'videos/MannHummel.mp4',
        label: 'Mann Hummel',
        thumbnail: 'img/thumbnailmann.png'
      },
      'TennBallet': {
        source: 'videos/BalletTenn.mp4',
        label: 'Ballet Tennessee',
        thumbnail: 'img/thumbnailballet.png'
      },
      'RubyFalls': {
        source: 'videos/RubyFallsTRIM720.mp4',
        label: 'Ruby Falls',
        thumbnail: 'img/thumbnailrubyfalls.png'
      }
    };

    $scope.myGoBack = function() {
      var oldPlayer = document.getElementById('videojs-panorama-player');
      videojs(oldPlayer).dispose();
      window.history.back();
    };

    $http
      .get('https://s3.amazonaws.com/360vipvideos/videos.json')
      .then(function success(response) {
        $rootScope.videos = response.data;
      });

    $scope.openVideo = function(source) {
      $rootScope.videoSource = source;
      $state.go('video1');
    };
  }
]);
