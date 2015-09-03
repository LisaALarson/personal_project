myApp.controller('TeacherHomeController', ['$scope', '$http', 'userProperties', function($scope, $http, userProperties){

    $scope.username = userProperties.get('username');
    console.log("username:" + $scope.username);

    $scope.quiz={};
    $scope.quizzes=[];

    //this function returns the object from the database
    $scope.fetchQuizzes = function(){
        return $http.get('/quizzes').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to save and return quiz from the api");
            }
            //$scope.quiz = {};
            //$scope.quizzes = response.data;
            console.log($scope.quizzes);

            for (var i = 0; i<response.data.length; i++){
                if(response.data[i].username == $scope.username){
                    $scope.quizzes.push(response.data[i]);
                    console.log($scope.quizzes);
                }
            }
            console.log("final list of quizzes: "+ $scope.quizzes);


            return response.data;
        });
    };

    //this calls the fetchQuizzes() function on page load
    $scope.fetchQuizzes();

    //this deletes questions from the database and the page
    //this is being send as a POST because something is wrong with the DELETE functionality
    $scope.deleteQuiz = function(data){
        confirm("Are you sure you want to delete this quiz?");
        return $http.post("/quizzes", data).then($scope.fetchQuizzes());
    };

}]);//end controller