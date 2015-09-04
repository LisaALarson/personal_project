myApp.controller('StudentHomeController', ['$scope', '$http', 'userProperties', function($scope, $http, userProperties){
    //console.log("student home controller");

    $scope.username = userProperties.get('username');
    console.log("HERE IT IS: " + $scope.username);


    $scope.quizzes=[];

    //this function returns the object from the database
    $scope.fetchQuizzes = function(){
        return $http.get('/quizzes').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to save and return quiz from the api");
            }
            //$scope.quiz = {};
            //$scope.quizzes = response.data;//comment out when implementing for loop
            //console.log($scope.quizzes);
            //console.log(response.data.players);

            for (var i = 0; i<response.data.length; i++){
                for(var j = 0; j<response.data[i].players.length; j++){
                    if(response.data[i].players[j] == $scope.username){
                        $scope.quizzes.push(response.data[i]);
                    }
                }
                //if(response.data[i].username == $scope.username){ //need to look for response.data[i].players[i]
                //    $scope.quizzes.push(response.data[i]);
                //    console.log($scope.quizzes);
                //}
            }
            console.log("final list of quizzes: "+ $scope.quizzes);


            return response.data;
        });
    };


    //this calls the fetchQuizzes() function on page load
    $scope.fetchQuizzes();

    $scope.deleteGame = function(){
        confirm("Are you sure you want to delete this game?");
        //return $http.delete("/:id").then(fetchQuizzes());
    };

    $scope.fetchData = function() {
        //$http .then({
            //set $scope
    //});
    };

    $scope.fetchData();





}]); // end controller