myApp.controller("TeacherRegisterController", ['$scope', '$http', function($scope, $http){
    console.log("Teacher Register Controller");

    $scope.teacherUser = {};

    $scope.register = function(user){
        return $http.post('/tRegister', user).then(function(){
            console.log("new teacher added!");
        });
    };

}]);