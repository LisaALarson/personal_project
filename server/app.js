var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log("Listening on Port: ", app.get('port'));
});

app.use(bodyParser.json());

app.use('/', index);

module.exports = app;