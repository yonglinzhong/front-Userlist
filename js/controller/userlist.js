app.controller('userCtrl', function($scope, Users) {
        
        $scope.user = new Users();
        $scope.users = $scope.user.userlist;


        $scope.edit = false;
        $scope.delete = false;
        $scope.error = false;
        $scope.incomplete = false;
        $scope.tmp = 0;


        // Sort Users
        $scope.predicate = 'age';
        $scope.reverse = true;
        $scope.order = function(predicate) {
            $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
            $scope.predicate = predicate;
        };


        // Pagination
        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.maxSize = 5;


        //When the *delete* button is clicked.
        $scope.deleteUser = function(id) {
            $scope.user.deleteUser(id);
            Users.userlist = $scope.user.userlist;
        };
});
