angular.module('starter', ['ionic'])


    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }

            ionic.Platform.fullScreen();

        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            // .state('splash', {
            //     url: '/',
            //     templateUrl: 'splash.html',
            //     controller: 'homeCtrl'
            // })
            .state('home', {
                url: '/',
                templateUrl: 'home.html',
                controller: 'homeCtrl'
            })
            .state('video1', {
                url: '/video1',
                templateUrl: 'video1.html',
                controller: 'appCtrl'
            })
            .state('video2', {
                url: '/video2',
                templateUrl: 'video2.html',
                controller: 'flatVideoCtrl'
            })
            .state('video3', {
                url: '/video3',
                templateUrl: 'video3.html',
                controller: 'appCtrlMontage'
            })
            .state('video4', {
                url: '/video4',
                templateUrl: 'video4.html',
                controller: 'appCtrlCard'
            })
            .state('video5', {
                url: '/video5',
                templateUrl: 'video5.html',
                controller: 'appCtrlRubyFalls'
            })
            .state('video6', {
                url: '/video6',
                templateUrl: 'video6.html',
                controller: 'appCtrlMannHummel'
            });
        $urlRouterProvider.otherwise("/");
    })

    .controller('homeCtrl', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', '$http', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory, $http) {


        //JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
        // var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg";
        // var downloadSize = 4995374; //bytes

        // function ShowProgressMessage(msg) {
        //     if (console) {
        //         if (typeof msg == "string") {
        //             console.log(msg);
        //         } else {
        //             for (var i = 0; i < msg.length; i++) {
        //                 console.log(msg[i]);
        //             }
        //         }
        //     }

        //     var oProgress = document.getElementById("progress");
        //     if (oProgress) {
        //         var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        //         oProgress.innerHTML = actualHTML;
        //     }
        // }

        // $scope.checkConnection = function () {
        //     ShowProgressMessage("Loading the image, please wait...");
        //     window.setTimeout(MeasureConnectionSpeed, 1);
        // };

        // if (window.addEventListener) {
        //     window.addEventListener('load', $scope.checkConnection, false);
        // } else if (window.attachEvent) {
        //     window.attachEvent('onload', $scope.checkConnection);
        // }

        // function MeasureConnectionSpeed() {
        //     var startTime, endTime;
        //     var download = new Image();
        //     download.onload = function () {
        //         endTime = (new Date()).getTime();
        //         showResults();
        //     }

        //     download.onerror = function (err, msg) {
        //         ShowProgressMessage("Invalid image, or error downloading");
        //     }

        //     startTime = (new Date()).getTime();
        //     var cacheBuster = "?nnn=" + startTime;
        //     download.src = imageAddr + cacheBuster;

        //     function showResults() {
        //         var duration = (endTime - startTime) / 1000;
        //         var bitsLoaded = downloadSize * 8;
        //         var speedBps = (bitsLoaded / duration).toFixed(2);
        //         var speedKbps = (speedBps / 1024).toFixed(2);
        //         var speedMbps = (speedKbps / 1024).toFixed(2);
        //         ShowProgressMessage([
        //             "Your connection speed is:",
        //             speedBps + " bps",
        //             speedKbps + " kbps",
        //             speedMbps + " Mbps"
        //         ]);
        //     }
        // }


        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        // $http.get('http://videoideas.com/videos/videos.json')
        //     .then(function success(response) {
        //         $rootScope.videos = response.data;
        //         $rootScope.videos = $rootScope.videos.files.mp4
        //         console.log($rootScope.videos);

        //     });

        // $scope.openVideo = function (source) {
        //     $rootScope.videoSource = source;
        //     console.log($rootScope.videoSource);
        //     $state.go('video1')
        // }

    }])


    .controller('flatVideoCtrl', ['$scope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };


    }])

    .controller('appCtrl', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();
                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);


            player.playlist([{
                    sources: [{
                        src: $rootScope.videoSource,
                        type: 'video/mp4'
                    }],
                    poster: ''
                },

            ]);
            player.playlist.autoadvance(2.5);

            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });

            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }])

    .controller('appCtrl2', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();
                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);



            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });

            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }])
    .controller('appCtrlRubyFalls', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();

                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);

            // videojs("videojs-panorama-player").ready(function () {

            //     //Resets the orientation
            //     player.on('beforeplaylistitem', function () {
            //         console.log('changing sources');
            //         var canvas = player.getChild('Canvas');
            //         canvas.lat = 0
            //         canvas.lon = -180
            //         console.log(canvas)
            //     });

            // });



            // player.playlist([{
            //         sources: [{
            //             src: 'videos/RubyFallsTRIM720.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }, {
            //         sources: [{
            //             src: 'videos/RubyFallsTRIM720.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }

            // ]);
            // player.playlist.autoadvance(2.5);


            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });



            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }])
    .controller('appCtrlMontage', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();
                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);


            // player.playlist([{
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINAL1920.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }, {
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINAL1920.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }

            // ]);
            // player.playlist.autoadvance(2.5);

            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });

            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }])
    .controller('appCtrlCard', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();
                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);


            // player.playlist([{
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINALFULLSIZE.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }, {
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINALFULLSIZE.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }

            // ]);
            // player.playlist.autoadvance(2.5);

            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });

            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }])
    .controller('appCtrlMannHummel', ['$scope', '$rootScope', '$state', '$ionicModal', '$ionicHistory', function ($scope, $rootScope, $state, $ionicModal, $ionicHistory) {

        $scope.myGoBack = function () {
            var oldPlayer = document.getElementById('videojs-panorama-player');
            videojs(oldPlayer).dispose();
            window.history.back();
        };

        console.log($rootScope.videoSource);

        function isMobile() {
            var check = false;
            (function (a) {
                if (
                    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i
                    .test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
                    .test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        (function (window, videojs) {

            var player = window.player = videojs('videojs-panorama-player', {}, function () {
                window.addEventListener("resize", function () {
                    var canvas = player.getChild('Canvas');
                    if (canvas) canvas.handleResize();
                });

            });

            var videoElement = document.getElementById("videojs-panorama-player");
            var width = videoElement.offsetWidth;
            var height = videoElement.offsetHeight;
            player.width(width), player.height(height);


            // player.playlist([{
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINAL1920.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }, {
            //         sources: [{
            //             src: 'videos/RubyFallsBoardDemoFINAL1920.mp4',
            //             type: 'video/mp4'
            //         }],
            //         poster: ''
            //     }

            // ]);
            // player.playlist.autoadvance(2.5);

            player.panorama({
                clickToToggle: (!isMobile()),
                autoMobileOrientation: true,
                initFov: 100,
                initLat: -5,
                initLon: -180,
                showNotice: false,

            });

            console.log(player.cache_.src);

            window.addEventListener("message", function (event) {
                if (typeof event.data === "object") {
                    if (event.data.type === "device-motion") {
                        var canvas = player.getChild('Canvas');
                        if (canvas) canvas.handleMobileOrientation(event.data.events);
                    }
                }
            }, false);

            function isIos() {
                return /iPhone|iPad|iPod/i.test(navigator.userAgent);
            }
            if (isIos()) {
                player.controlBar.fullscreenToggle.on("tap", function () {
                    if (!player.isFullscreen()) {
                        parent.postMessage("enterFullWindow", "*");
                    } else {
                        parent.postMessage("exitFullWindow", "*");
                    }
                });
            }
        }(window, window.videojs));

    }]);