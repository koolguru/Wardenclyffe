/**
 * Module Dependencies
*/
var express = require('express');
var mongoose = require('mongoose');
var pub = __dirname + "/public";

//setup middleware
var app = express();
app.use(express.static(pub));
app.use(express.bodyParser());
app.set('views', __dirname + "/views");
app.set('view engine', 'jade'); //set default template engine to jade

//initialize mongoose
var uri = 'mongodb://localhost/wardenclyffe';
global.db = mongoose.createConnection(uri);

//Routes
var routes = require('./routes');
app.get('/', routes.home);
app.get('/about', routes.about);
app.get('/ask', routes.ask);
app.post('/ask', routes.submitq);
app.get('/question/:id', routes.question);
app.get('/tags', routes.tags);
app.get('/tag/:tag', routes.tagsearch);
app.get('/tag', routes.tagsearch);

//Error handling
app.use(function(err, req, res, next) {
    res.json(err.stack);
	//res.json(err);
});

app.listen(3000);
console.log("Listening on port 3000");