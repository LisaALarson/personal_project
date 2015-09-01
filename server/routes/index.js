var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
//var GameCode = require('../gameCode');


//moved this line to app.js file
//mongoose.connect('mongodb://localhost/personal_project');

var Quiz = mongoose.model('Quiz', {title: String, questions: Array, code: Number});

// this posts the information in the quiz form as a new quiz to the database
router.post('/add', function(request, response, next){
    console.log(' ');
    console.log("request" +  JSON.stringify(request.body));
    console.log(' ');

    //var data = request.body.questions[0];

    //var otherAnswers = [];
    //if(data.answer2){
    //   otherAnswers.push(data.answer2);
    //}
    //if(data.answer3){
    //    otherAnswers.push(data.answer3);
    //}
    //if(data.answer4){
    //    otherAnswers.push(data.answer4);
    //}

    //console.log(data, otherAnswers);
    //console.log(data.answer1);


    var teacherQuizzes = new Quiz({
        title:request.body.title,
        questions: request.body.questions,
        code: request.body.code
        //correctAnswer: data.answer1,
        //otherAnswers: otherAnswers
    });

    teacherQuizzes.save(function(err){
        if(err)console.log("teacherQuizzes error", err);
        response.send(teacherQuizzes.toJSON());
        next();
    });
});

//this gets all the quizzes from the database and sends them back clientside
router.get('/quizzes', function(request, response, next){
    return Quiz.find({}).exec(function(err, quizzes){
        if(err)throw new Error(err);
        response.send(JSON.stringify(quizzes));
        next();
    });
});

// this finds quiz by code and sends it back clientside to be pushed to array.
router.post('/quizToPlay', function(request, response, next){
    console.log(' ');
    console.log("request" +  JSON.stringify(request.body));
    console.log(' ');
    return Quiz.findOne({'code': request.body.code}).exec(function(err, quizzes){
        if(err)throw new Error(err);
        response.send(JSON.stringify(quizzes));
        next();
    });
});

//this finds a quiz by id in the database and deletes it
router.post("/quizzes", function(req, res, next){
    console.log("hello");
    console.log(req.body);
    //console.log(req);
    Quiz.findByIdAndRemove(req.body._id, req.body, function(err, post){
        if(err){
            console.log("Error with delete!");
        }
        res.json(post);
    })
});
//
//router.get('/game-code', function(req, res){
//    res.json(GameCode());
//    console.log("hi");
//});

router.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;