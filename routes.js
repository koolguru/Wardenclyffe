
var Schema = require('mongoose').Schema;
var questionSchema = Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    tags: Array
});

exports.home = function(req, res, next) {
	res.render("pages/overview", {active: ""});
}

exports.about = function(req, res, next) {
	res.render("pages/about", {active: "about", caption: "About us"});
}

exports.ask = function(req, res, next) {
    if (req.body !== {}) {
        
    }
    else { res.render("pages/ask", {active: "ask", caption: "Ask a Question"}); }
}

exports.tags = function(req, res, next) {
    res.json(["chem", "calc", "english", "history", "psych"]);
}

