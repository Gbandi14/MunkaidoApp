app.controller('WorktimeCtrl', function($scope, $rootScope){
    $rootScope.location = '#!/worktime'
    $scope.date = ''
    $scope.start = ''
    $scope.end = ''
    $scope.employeeId = ''
    $scope.alkalmazottak = []
    $scope.munkaidok = []
     
 
    axios.get('http://localhost:2000/alkalmazottak').then(res => {
        $scope.alkalmazottak = res.data
        $scope.$apply()
        axios.get('http://localhost:2000/munkaidok').then(res2 => {
            $scope.munkaidok = res2.data.map(munkaido => {
                munkaido.employee = res.data.find(x => x.id === munkaido.employeeId)
                munkaido.start = new Date("2000-01-01T" + munkaido.start + "Z")
                munkaido.end = new Date("2000-01-01T" + munkaido.end + "Z")
                return munkaido
            })
            $scope.$apply()
        })
    })

    $scope.Create = () => {
        if (!$scope.employeeId || !$scope.date || !$scope.start || !$scope.end) return alert('Nincs meg minden adat!')
  
        axios.post('http://localhost:2000/munkaido', { date: $scope.date, start: $scope.start, end: $scope.end, employeeId: $scope.employeeId }).then(res => {
            alert('Sikeresen felvetted a munkaidőt!')
            window.location.reload()
        })
    }
  
    $scope.Remove = (id) => {    
        axios.delete(`http://localhost:2000/munkaido/${id}`).then(res => {
            alert('Sikeresen törölted a munkaidőt!')
            window.location.reload()
        })
    }
})