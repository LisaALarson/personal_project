myApp.controller('TeacherNewQuizController', ['$scope', '$http', function($scope, $http){
    console.log("Teacher New Quiz Controller");
    $scope.quiz={};
    $scope.quizzes=[];

    var saveQuiz = function(){
        return $http.get('/quizzes').then(function(response){
            if(response.status !==200){
                throw new Error("Failed to save and return quiz from the api");
            }
            $scope.quiz = {};
            $scope.quizzes = response.data;
            return response.data;
        })
    };
    $scope.add = function(quiz){
        return $http.post('/add', quiz).then(saveQuiz);
    };

    $scope.questionNumber = 1;
    $scope.inputCounter = 0;
    $scope.inputs = [{
        id: 'input'
    }];
    $scope.addQuestion = function(){
        $scope.questionNumber++;
        $scope.inputTemplate = {
            id: 'input-' + $scope.inputCounter,
            name: ''
        };
        $scope.inputCounter +=1;
        $scope.inputs.push($scope.inputTemplate);
        //console.log($scope.inputCounter);
        console.log($scope.inputs);
    };
}]);

//app.factory("AddQuestion", function(){
//    $scope.questionNumber = 1;
//    $scope.inputCounter = 0;
//    $scope.inputs = [{
//        id: 'input'
//    }];
//    var addQuestion = function(){
//        $scope.questionNumber++;
//        $scope.inputTemplate = {
//            id: 'input-' + $scope.inputCounter,
//            name: ''
//        };
//        $scope.inputCounter +=1;
//        $scope.inputs.push($scope.inputTemplate);
//        //console.log($scope.inputCounter);
//        console.log($scope.inputs);
//    };
//});