app.controller('StatCtrl', function($scope, $sce, $routeParams, $rootScope, $window)
{
    $rootScope.location = $window.location.hash;
    $scope.alkalmazottak = []
    $scope.munkaidok = []
    $scope.stats = []

    $scope.month = new Date().toLocaleString("default", {month:"long"})

    axios.get('http://localhost:2000/alkalmazottak').then(res =>{
        $scope.alkalmazottak = res.data

        axios.get('http://localhost:2000/munkaidok').then(res2 =>{
            $scope.munkaidok = res2.data
            $scope.stats = res.data.map(alkalmazott => {
                const name = alkalmazott.name
                const pricePerHour = alkalmazott.pricePerHour
                const idok = res2.data.filter(x => x.employeeId === alkalmazott.id && new Date(x.date).toLocaleString("default", {month:"long"}) === $scope.month)
                const milliseconds = idok.reduce((a, c) => {
                    return a + Number(new Date("2000-01-01T" + c.end + "Z") - new Date("2000-01-01T" + c.start + "Z"))
                }, 0)
                const hours = (milliseconds / 1000 / 60 / 60).toFixed(2)
                const salary = hours * pricePerHour
        
                console.log(res2.data)

                return { name, pricePerHour, hours, salary }
            })
        
            $scope.$apply()
        })
    })   


})