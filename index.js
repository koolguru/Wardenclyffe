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
	res.render("pages/overview");
});

app.get('/about', function(req, res, next) {
	res.render("pages/about");
});

app.use(function(err, req, res, next) {
	res.send(err.stack);
});

app.listen(3000);
console.log("Listening on port 3000");