myApp.controller('StudentJoinGameController', ['$scope', '$http', function($scope, $http){

    $scope.quiz={};
    $scope.quizzes=[];

    $scope.quizzesToPlay = [];

    // this function pulls a specific game from the database based on the game code
    $scope.fetchGame = function(gameCode){
        //console.log("Lisa, set up a get request to get game by game code from the server");
        console.log(gameCode);
        var newObj = {
            code: gameCode
        };
        var myCode = JSON.stringify(newObj);
        return $http.post('/quizToPlay', myCode).then(function(response){
            if(response.status !==200){
                throw new error("Failed to get game from the database");
            }
            //$scope.quizzesToPlay = [];
            $scope.quizzesToPlay.push(response.data);
            //$scope.quiz = {};
            //$scope.quizzes = response.data;
            console.log($scope.quizzesToPlay);
            return response.data;
        });
    };


}]); //end controller






