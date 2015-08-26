var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/personal_project');

var Quiz = mongoose.model('Quiz', {title: String, question: String, questionAnswers:{answer1: String, answer2: String, answer3: String, answer4: String}});

router.post('/add', function(request, response, next){
    var teacherQuizzes = new Quiz({title:request.body.title, question:request.body.question});
    teacherQuizzes.save(function(err){
        if(err)console.log("teacherQuizzes error", err);
        response.send(teacherQuizzes.toJSON());
        next();
    });
});

router.get('/quizzes', function(request, response, next){
    return Quiz.find({}).exec(function(err, quizzes){
        if(err)throw new Error(err);
        response.send(JSON.stringify(quizzes));
        next();
    });
});

router.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;