app.controller('EmployeeCtrl', function($scope, $rootScope){
    $rootScope.location = '#!/employee'
    $scope.name = ''
    $scope.address = ''
    $scope.position = ''
    $scope.pricePerHour = ''
    $scope.alkalmazottak = []
  
    axios.get('http://localhost:2000/alkalmazottak').then(res => {
        $scope.alkalmazottak = res.data
        $scope.$apply()
    })
  
    $scope.Create = () => {
        if (!$scope.name || !$scope.address || !$scope.position || !$scope.pricePerHour) return alert('Nincs megadva minden adat!')
        if (isNaN($scope.pricePerHour)) return alert('Az órabér csak szám lehet!')

        axios.post('http://localhost:2000/alkalmazott', { name: $scope.name, address: $scope.address, position: $scope.position, pricePerHour: $scope.pricePerHour }).then(res => {
            alert('Sikeresen felvetted az alkalmazottat!')
            window.location.reload()
        })
    }

    $scope.Remove = (id) => {    
        axios.delete(`http://localhost:2000/alkalmazott/${id}`).then(res => {
            alert('Sikeresen törölted az alkalmazottat!')
            window.location.reload()
        })
    }
});