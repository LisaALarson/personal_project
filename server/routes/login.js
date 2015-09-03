var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var User = require('../models/user');

router.get('/', function(req, res, next){
    console.log(' at / ');
    res.sendFile(path.resolve(__dirname, "../views/routes/login.html"));
});

//router.get('/userInfo', function(req, res, next){
//    return User.findOne({}).exec (function(err, user){
//        if(err) throw new Error (err);
//        //console.log(user);
//        res.send(JSON.stringify(user));
//    });
//});

//router.post('/', passport.authenticate('local',
//    {
//        successRedirect: getRedirectUrl(),
//        failureRedirect: '/'
//    },
//
//    var getRedirectUrl = function(){
//        console.log('hit success redirect');
//        return "/views/routes/tHome.html";
//    }
//    var x = function(req, res){
//        //console.log(req);
//        console.log(res);
//        console.log(res.status);
//
//        //if (res.status == "Teacher"){
//        //    res.redirect('/');
//        //}
//        //else{
//        //    res.redirect('/');
//        //}
//    }
//
//));

router.post('/', passport.authenticate('local'), function(req, res) {
        //if (err) { return next(err); }
        //if (!user) { return res.redirect('/'); }

    console.log('REQ BODY' + JSON.stringify(req.user.status));

    var user = req.user;

    if(user.status == 'Teacher'){
        var file = '/views/index.html';
        //res.sendFile(path.join(__dirname, '../public', file));
        res.json({"status": "teacher", "username": user.username});

        //res.redirect('/views/routes/tHome.html');
    } else {
        res.json({"status": "student", "username": user.username});
    }
    //console.log('RES: ' + JSON.stringify(res));

        //req.logIn(user, function(err) {
        //    if (err) { return next(err); }
        //    console.log(res.status);
        //
        //    if(res.status == "Teacher"){
        //        console.log("go to teacher home");
        //        return res.redirect('/views/routes/tHome.html/');
        //    }
        //    else{
        //        console.log('go to student home');
        //        return res.redirect('/views/routes/sHome.html/');
        //    }
        //
        //});
});

module.exports = router;