myApp.controller('TeacherNewQuizController', ['$scope', '$http', function($scope, $http){
    console.log("Teacher New Quiz Controller");

    $scope.quiz={};
    $scope.quizzes=[];

    $scope.questionNumber = 1;
    $scope.inputCounter = 2;
    $scope.inputs = [{
        id: '1'
    }];
    $scope.quiz = {};
    //$scope.quiz.inputs = $scope.inputs;

    //this function returns the object from the database
    var fetchQuizzes = function(){
        return $http.get('/quizzes').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to save and return quiz from the api");
            }
            $scope.quizzes = response.data;
            console.log($scope.quizzes);
            return response.data;
        })
    };



    //this function sends the info from the form to the database
    $scope.add = function(quiz){
        quiz.questions = $scope.inputs.slice();
        return $http.post('/add', quiz).then(fetchQuizzes());
    };

    //this function adds an additional question place for the form
    $scope.addQuestion = function(){
        $scope.questionNumber++;
        $scope.inputTemplate = {
            id: $scope.inputCounter,
            name: ''
        };
        $scope.inputCounter +=1;
        $scope.inputs.push($scope.inputTemplate);
        //console.log($scope.inputCounter);
        console.log($scope.inputs);
    };

    $scope.deleteQuestion = function(index){
        $scope.this.parent.remove();
    };

    //do I need this? test once database is fixed
    fetchQuizzes();

}]);//end controller
