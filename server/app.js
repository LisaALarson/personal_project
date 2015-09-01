var express = require('express');
//var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var passport = require('passport');
var session = require('express-session');
var localStrategy = require('passport-local').Strategy;

var User = require('./models/user');
var index = require('./routes/index');
var tRegister = require('./routes/tRegister');


//??var GameCode = require('./gameCode');
var mongoose = require('mongoose');

app.use(session({
    secret: 'secret',
    key: 'user',
    resave: true,
    saveUninitialized: false,
    cookie: {maxAge: 60000, secure: false}
}));


//cookie parser?
app.use(bodyParser.json());
//body parser url encoded?
app.use(passport.initialize());
app.use(passport.session());


//Mongo Setup
var mongoURI = "mongodb://localhost/personal_project";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log("Mongo Connection Error: ", err);
});

MongoDB.once('open', function(err){
    console.log("Mongo Connection Open")
});
//////////////

// PASSPORT SESSION
passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err) done(err);
        done(null, user);
    });
});

passport.use('local', new localStrategy({
    passReqToCallback: true,
    usernameField: 'username'
}, function(req, username, password, done){
    User.findOne({username: username}, function(err, user){
        if(err) throw err;
        if(!user){
            return done(null, false, {message: 'Incorrect username and password'})
        }

        // test a matching password
        user.comparePassword(password, function(err, isMatch){
            if(err) throw err;
            if(isMatch)
                return done(null, user);
            else
                done(null, false, {message: 'Incorrect username and password'});
        });
    });
}));


///////////////////

app.use('/tRegister', tRegister);
//app.use('/user', users);
app.use('/', index);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log("Listening on Port: ", app.get('port'));
});

module.exports = app;