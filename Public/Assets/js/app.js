var app = angular.module('Munkaido', ['ngRoute']);
app.run(function($rootScope, $window)
{
    $rootScope.title = "MunakidoApp"
    $rootScope.location = $window.location.hash;
})

app.config(function($routeProvider)
{
    $routeProvider
    .when('/', {
        templateUrl: 'Views/Home.html',
        controller: 'HomeCtrl'
    })
    .when('/employee', {
        templateUrl: 'Views/Employee.html',
        controller: 'EmployeeCtrl'
    })
    .when('/worktime', {
        templateUrl: 'Views/Worktime.html',
        controller: 'WorktimeCtrl'
    })
    .when('/statistics', {
        templateUrl: 'Views/Statistics.html',
        controller: 'StatCtrl',
    })
})