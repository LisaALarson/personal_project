myApp.controller('TeacherHomeController', ['$scope', '$http', function($scope, $http){
    console.log("Teacher Home Controller");

    $scope.quiz={};
    $scope.quizzes=[];



    //this function returns the object from the database
    var fetchQuizzes = function(){
        return $http.get('/quizzes').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to save and return quiz from the api");
            }
            $scope.quiz = {};
            $scope.quizzes = response.data;
            console.log($scope.quizzes);
            return response.data;
        })
    };

    fetchQuizzes();

    var deleteQuiz = function(){
        alert("Are you sure you want to delete this quiz?");
    };


}]);//end controller