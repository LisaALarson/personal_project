myApp.controller('StudentJoinGameController', ['$scope', '$http', function($scope, $http){

    // this function pulls a specific game from the database based on the game code
    $scope.fetchGame = function(){
        console.log("Lisa, set up a get request to get game by game code from the server");
        //return $http.get('/SPECIFIC CODE QUIZ').then(function(response){
        //    if(response.status !==200){
        //        throw new error("Failed to get game from the database");
        //    }
        //    see teacherNewQuizController
        //    return response.data;
        //})
    };




}]); //end controller






