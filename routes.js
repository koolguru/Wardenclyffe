
var Schema = require('mongoose').Schema;
var questionSchema = Schema({
    title: String,
    description: String,
    tags: Array,
    date: { type: Date, default: Date.now() }    
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

exports.question = function(req, res, next) {
    if (req.params.id != "") {
        //render tba question page
        res.send("Grapes");
    }
}

exports.submitq = function (req, res, next) {
    if (Object.keys(req.body).length > 0) {
        var q = new Question({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags.split(',').map(Function.prototype.call, String.prototype.trim),
            date: Date.now()
        }).save(function (err, user) {
            if (err) res.json(err);
            res.redirect('question');
        });
    }
}

exports.tags = function(req, res, next) {
    res.json(["chem", "calc", "english", "history", "psych"]);
}

