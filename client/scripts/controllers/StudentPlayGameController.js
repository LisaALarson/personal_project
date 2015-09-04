myApp.controller('StudentPlayGameController', ['$scope', '$http', 'userProperties', function($scope, $http, userProperties){
    console.log("student play game controller");
    //console.log("GAME PAGE" + $scope.thisQuiz);

    $scope.currentQuiz = userProperties.get('currentQuiz');
    console.log($scope.currentQuiz);
    $scope.quizTitle = $scope.currentQuiz.title;
    $scope.quizLength = $scope.currentQuiz.questions.length;


}]);