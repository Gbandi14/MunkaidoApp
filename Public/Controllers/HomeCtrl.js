app.controller('HomeCtrl', function($scope, $rootScope, $window) {
    $rootScope.location = $window.location.hash;
})