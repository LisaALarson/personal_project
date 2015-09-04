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
        when('/sGame', {
            templateUrl: "/views/routes/sGame.html",
            controller: "StudentGameController"
        }).
        when('/login', {
            templateUrl: "/views/routes/login.html",
            controller: "LoginController"
        }).
        when('/tRegister', {
            templateUrl: "/views/routes/tRegister.html",
            controller: "TeacherRegisterController"
        }).
        when('/sRegister', {
            templateUrl: "/views/routes/sRegister.html",
            controller: "StudentRegisterController"
        }).
        otherwise({
            redirectTo: "/login"
        })
}]);

myApp.factory('userProperties', function(){
    var properties = {};
    return {
        get: function(key){
            return properties[key];
        },
        set: function(key, value){
            properties[key] = value;
        }
    }
})