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
app.get('/question/:id/comments', routes.comments);
app.post('/question/:id/answer', routes.answer);
//TBA: /question/:id/upvote, /question/:id/downvote 
// --> Have these require a POST parameter which, if missing, shows the 404 page
// --> Same for /ask 
app.get('/tags', routes.tagjson); //Might drop? IDK
//TBA: /tags/recent, tags/popular, tags/unanswered with /json subdirs
app.get('/tag', routes.tagjson);
app.get('/tag/:tag', routes.tag);
app.get('/tag/:tag/json', routes.tagjson);
app.get('/tag/tagsearch', routes.tagsearch);

//Error handling
app.use(function(err, req, res, next) {
    res.json(err.stack);
	//res.json(err);
});

app.listen(3000);
console.log("Listening on port 3000");
