console.log("Hello?");
myApp.controller('TeacherNewQuizController', ['$scope', function($scope){
    console.log("Teacher New Quiz Controller");
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