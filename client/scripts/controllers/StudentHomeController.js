myApp.controller('StudentHomeController', ['$scope', '$http', function($scope, $http){
    console.log("student home controller");

    $scope.deleteGame = function(){
        confirm("Are you sure you want to delete this game?");
        //return $http.delete("/:id").then(fetchQuizzes());
    };





}]); // end controller