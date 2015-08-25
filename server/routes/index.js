var express = require('express');
var router = express.Router();
var path = require('path');
//var username = require('../public/data/username.json');


//router.get('/username', function(req, req, next){
//    res.json(username);
//});

//router.post('/data', function(req, res, next){
//
//});

//router.delete('/data', function(req, res, next){
//
//});

router.get('/*', function(req, res){
    console.log("got here!");
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;