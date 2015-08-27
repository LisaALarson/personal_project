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
        when('/sHome', {
            templateUrl: "/views/routes/sHome.html",
            controller: "StudentHomeController"
        }).
        when('/sJoinGame', {
            templateUrl: "/views/routes/sJoinGame.html",
            controller: "StudentJoinGameController"
        }).
        when('/sPlayGame', {
            templateUrl: "/views/routes/sPlayGame.html",
            controller: "StudentPlayGameController"
        }).
        otherwise({
            //if logged in as teacher, go to...
            redirectTo: "/tHome"
            //else, go to...
            //redirectTo: "/sHome"
        })
}]);