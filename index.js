/**
 * Module Dependencies
*/
var express = require('express');
var mongoose = require('mongoose');
var routes = require('./routes');
var pub = __dirname + "/public";

//setup middleware
var app = express();
app.use(express.static(pub));
app.set('views', __dirname + "/views");
app.set('view engine', 'jade'); //set default template engine to jade

//initialize mongoose
var uri = 'mongodb://localhost/wardenclyffe';
global.db = mongoose.createConnection(uri);
var Schema = mongoose.Schema;

//Routes
app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/ask', routes.ask);
app.get('/tags', routes.tags);

//Error handling
app.use(function(err, req, res, next) {
    res.json(err.stack);
	//res.json(err);
    //res.json(err.stack);
});

app.listen(3000);
console.log("Listening on port 3000");