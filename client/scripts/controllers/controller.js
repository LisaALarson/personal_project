myApp.controller('TeacherHomeController', ['$scope', function($scope){
    console.log("Teacher Home Controller");
}]);

myApp.controller('TeacherNewQuizController', ['$scope', function($scope){
    console.log("Teacher New Quiz Controller");
    $scope.questions=[]
}]);