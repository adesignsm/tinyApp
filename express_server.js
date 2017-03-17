var express = require("express");
var cookie = require("cookie-parser");
var methodOverride = require("method-override");

var app = express();
app.set("view engine", "ejs");

app.use(cookie());
app.use(methodOverride("X-HTTP-Method-Override"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var PORT = process.env.PORT || 8080; //default port

var urlDatabase = { //url database

	"b2xVn2": "http://www.lighthouselabs.ca",
  	"9sm5xK": "http://www.google.com",
};

app.get("/", (re, res) => { //example of a route handler
	res.end("Hello!");
});

app.get("/urls.json", (req, res) => { //retrieves the urlDatabase obj
	res.end(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n"); //creates HTML
});

app.get("/urls", (req, res) => { //access the views files ("urls_index")
	var templateVars = { urls: urlDatabase };
	res.render("urls_index", templateVars);
});

app.get("/urls/new", (req, res) => { //renders file /urls/new
	res.render("urls_new");
});

app.post("/urls", (req, res) => { //posts the short url and long url to the index page
	const shortURL = generateRandomString();
	urlDatabase[shortURL] = req.body.longURL;
	console.log(urlDatabase);
	res.redirect('/urls');
});

app.post("/urls/:id/delete", (req, res) => { //Delete corresponding link
	if (urlDatabase[req.params.id]) {
		delete urlDatabase[req.params.id];
	} 
	res.redirect("/urls");
});

app.get("/urls/:id", (req, res) => { //access the views files ("urls_show")
	var templateVars = { shortURL: req.params.id };
	res.render("urls_show", templateVars);
});

app.listen(PORT, () => { //Tells client that server is running
	console.log(`Example app listening port ${PORT}!`);
});

app.post("/urls/:id", (req, res) => { //Update url link
	
	var shortURL = req.params.id;

	if (urlDatabase[shortURL]) {
		urlDatabase[shortURL] = req.body.updateURL;
	}
	console.log(req.params.id);
	res.redirect("/urls");	
});
debugger

app.post("/urls/login", (req, res) => { //login form cookie
	res.cookie("username", "/urls/login", {
		domain: "/urls/login", 
		encode: String
	});
	res.redirect("/urls");
});

function generateRandomString() { //RANDOM URL

	var randString = [];

	for (var i = 0; i < 6; i++) {

		randString[i] = Math.floor(Math.random() * 9);
	}
	return randString.join("");	
}