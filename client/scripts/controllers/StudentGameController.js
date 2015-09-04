myApp.controller('StudentGameController', ['$scope', '$http', 'userProperties', function($scope, $http, userProperties){
    console.log('student game controller');



    $scope.currentQuiz = userProperties.get('currentQuiz');
    console.log("WOOT WOOT QUIZ!", $scope.currentQuiz);


    //$scope.myInterval = 5000;
    //$scope.noWrapSlides = true;
    //var slides = $scope.slides = [];
    //$scope.addSlide = function() {
    //    var newWidth = 600 + slides.length + 1;
    //    slides.push({
    //        image: '//placekitten.com/' + newWidth + '/300',
    //        text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
    //        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    //    });
    //};
    //for (var i=0; i<4; i++) {
    //    $scope.addSlide();
    //}









}]);//end controller