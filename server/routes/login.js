var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/user');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, "../views/login.html"));
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '../public/views/routes/tHome',
        failureRedirect: '/'
    })
);

module.exports = router;