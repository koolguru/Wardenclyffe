/**
 * Module Dependencies
*/
var express = require('express');
var pub = __dirname + "/public";
//setup middleware
var app = express();
app.use(express.static(pub));
app.set('views', __dirname + "/views");
//set default template engine to jade
app.set('view engine', 'jade');

app.get('/', function(req, res, next) {
	res.render("pages/overview", {active: ""});
});

app.get('/about', function(req, res, next) {
	res.render("pages/about", {active: "about", caption: "About us"});
});

app.get('/ask', function(req, res, next) {
	res.render("pages/ask", {active: "ask", caption: "Ask a Question"});
});

app.get('/tags/:tag', function(

app.use(function(err, req, res, next) {
	res.send(err.stack);
});

app.listen(3000);
console.log("Listening on port 3000");