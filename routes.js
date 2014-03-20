
var Schema = require('mongoose').Schema;
var questionSchema = Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now },
    tags: Array
});
var Question = db.model('Question', questionSchema);

exports.home = function(req, res, next) {
	res.render("pages/overview", {active: ""});
}

exports.about = function(req, res, next) {
	res.render("pages/about", {active: "about", caption: "About us"});
}

exports.ask = function(req, res, next) {
    res.render("pages/ask", {active: "ask", caption: "Ask a Question"});
}

exports.submitq = function (req, res, next) {
    if (Object.keys(req.body).length > 0) {
        res.json({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags.replace(/ /g, '').split(',')
        });
    }
}

exports.tags = function(req, res, next) {
    res.json(["chem", "calc", "english", "history", "psych"]);
}

