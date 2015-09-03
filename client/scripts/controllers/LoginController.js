myApp.controller('LoginController', ['$scope', '$http', '$location', 'userProperties', function($scope, $http, $location, userProperties){
    console.log("login controller");

    $scope.username = "";

    $scope.loginForm = {};

    $scope.authLogin = function(user){
        console.log("auth login");

        return $http.post('/login', user).then(function(resp){
            console.log(resp);
            console.log(resp.data.username);

            $scope.username = resp.data.username;
            userProperties.set('username', $scope.username);

            if(resp.data.status == 'teacher'){
                $location.path('tHome');
            } else {
                $location.path('sHome');
            }
            //console.log(user);
            //console.log(response.data);
            //$scope.getUserInfo();

        })
    };






    //$scope.getUserInfo = function(){
    //    return $http.get('/login/userInfo').then(function(response){
    //        if(response.status !==200){
    //            throw new Error("Failed to save and return quiz from the api");
    //        }
    //        $scope.userInfo = response.data;
    //        console.log('got through GET!');
    //        //console.log(user.status);
    //        console.log(response.data);
    //        return response.data
    //    })
    //}

    //does not work -- should navigate the the users home page (teacher or student) -- need to figure out it user. status is ok
    //$scope.navigateHome = function(){
    //    if(user.status = "Teacher"){
    //        return "#tHome";
    //    }
    //    else{
    //        return "#sHome";
    //    }
    //}
}]); // end controller



//return $http.get('/quizzes').then(function(response){
//    if(response.status !==200){
//        throw new Error("Failed to save and return quiz from the api");
//    }
//    $scope.quiz = {};
//    $scope.quizzes = response.data;
//    console.log($scope.quizzes);
//    return response.data;
//});