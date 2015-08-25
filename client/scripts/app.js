var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/tHome', {
            templateUrl: "/views/routes/tHome.html",
            controller: "TeacherHomeController"
        }).
        when('/tNewQuiz', {
            templateUrl: "/views/routes/tNewQuiz.html",
            controller: "TeacherNewQuizController"
        }).
        otherwise({
            redirectTo: "/tHome"
        })
}]);