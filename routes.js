

exports.home = function(req, res, next) {
	res.render("pages/overview", {active: ""});
}

exports.about = function(req, res, next) {
	res.render("pages/about", {active: "about", caption: "About us"});
}

exports.ask = function(req, res, next) {
	res.render("pages/ask", {active: "ask", caption: "Ask a Question"});
}

exports.tags = function(req, res, next) {
    res.json(["chem", "calc", "english", "history", "psych"]);
}