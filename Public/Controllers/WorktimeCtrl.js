app.controller('WorktimeCtrl', function($scope, $sce, $routeParams, $rootScope, $window)
{
    $rootScope.location = $window.location.hash;
})