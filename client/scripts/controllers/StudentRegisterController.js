myApp.controller('StudentRegisterController', ['$scope', '$http', function($scope, $http){
    console.log('student register controller');

    $scope.studentUser = {};

    $scope.register = function(user){
        return $http.post('/sRegister', user).then(function(){
            console.log("new student added!");
        });
    };

}]);//end controller
