var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
//var GameCode = require('../gameCode');


//moved this line to app.js file
//mongoose.connect('mongodb://localhost/personal_project');

var Quiz = mongoose.model('Quiz', {title: String, questions: Array, code: Number, username: String, players: []});

// this posts the information in the quiz form as a new quiz to the database
router.post('/add-player', function(request, response, next){
    console.log(' ');
    console.log("request ADD PLAYER" +  JSON.stringify(request.body));
    console.log(' ');


    var teacherQuizzes = new Quiz({
        title:request.body.title,
        questions: request.body.questions,
        code: request.body.code,
        username: request.body.username,
        players: request.body.players
        //correctAnswer: data.answer1,
        //otherAnswers: otherAnswers
    });
    console.log("ASNCAOMWFCNISA", request.body.players);
    //Quiz.findByIdAndRemove(request.body._id, {$push: {'players': request.body.players}},
    //    {safe: true, upsert:true}, function(err){
    //        console.log(err);
    //    });
    Quiz.findByIdAndUpdate(request.body._id, {$push:{'players': request.body.players[request.body.players.length-1]}},
        {safe: true, upsert:true}, function(err){
            console.log(err);
        });

    /*function(err){

    //teacherQuizzes.update({code: request.body.code}, {$set: {players: request.body.players}}, function(err){

        if(err)console.log("teacherQuizzes error", err);
        response.send(teacherQuizzes.toJSON());
        next();
    });*/
});

router.post('/add', function(request, response, next){
    console.log(' ');
    console.log("request" +  JSON.stringify(request.body));
    console.log(' ');



    var teacherQuizzes = new Quiz({
        title:request.body.title,
        questions: request.body.questions,
        code: request.body.code,
        username: request.body.username,
        players: request.body.players
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
    console.log("LOOK HERE!: " + request.body);
    return Quiz.find({'username' : request.body.username }).exec(function(err, quizzes){
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
    //console.log("hello");
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
    console.log(req.params[0]);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;