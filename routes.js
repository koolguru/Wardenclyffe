
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
        Question.findById(req.params.id, function (err, q) {
            //if (err) res.json(err)
            //res.json(q);
            res.render("pages/question", {active: "question", caption: q.title, q:q});
        });
    }
}

exports.submitq = function (req, res, next) {
    if (Object.keys(req.body).length > 0) {
        var q = new Question({
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags.split(',').map(Function.prototype.call, String.prototype.trim),
            date: Date.now()
        }).save(function (err, q) {
            if (err) res.json(err);
            res.redirect('/question/' + q._id);
        });
    }
}

exports.tags = function(req, res, next) {
    res.json(["chem", "calc", "english", "history", "psych"]);
}

exports.tagjson = function(req, res, next) {
    req.query.json = true;
    exports.tagsearch(req, res, next);
}

exports.tagsearch = function(req, res, next) {
    if (req.params.tag) {
        Question.find({ tags: { $all: [req.params.tag] } }).setOptions({limit:10, lean:true}).exec(function(err, questions) {
            if (err) res.json(err);
            if (req.query.json) res.json(questions);
            else res.render("pages/tags", {title: req.params.tag, results: questions, tag: req.params.tag});  
        });
    }
    else {
        Question.find({}).setOptions({limit:10, lean:true}).exec(function(err, questions) {
            if (err) res.json(err);
            if (req.query.json) res.json(questions);
            else res.render("pages/tags", {title: "Tags", results: questions});
        });
    }
}

exports.comments = function(req, res, next) {
    //Check if question comments or answer comments...and which ids
    //This one will always return JSON, as it will be part of a larger page.
    //Perhaps also add a field for min # and max # for dynamic retrieval
    res.json(req.params); //Expects GET request
}

exports.answer = function(req, res, next) {
    //Functionality TBA
    res.json(req.body); //Expects POST request
}

