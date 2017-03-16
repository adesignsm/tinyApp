var express = require("express");

var app = express();
app.set("view engine", "ejs");

var PORT = process.env.PORT || 8080; //default port

var urlDatabase = { //url database

	"b2xVn2": "http://www.lighthouselabs.ca",
  	"9sm5xK": "http://www.google.com"
};

app.get("/", (re, res) => { //example of a rpute handler
	res.end("Hello!");
});

app.get("/urls.json", (req, res) => {
	res.end(urlDatabase);
});

app.get("/hello", (req, res) => {
  res.end("<html><body>Hello <b>World</b></body></html>\n"); //creates HTML
});

app.get("/urls", (req, res) => { //access the views files ("urls_index")
	var templateVars = { urls: urlDatabase };
	res.render("urls_index", templateVars);
});

app.get("/urls/:id", (req, res) => { //access the views files ("urls_show")
	var templateVars = { shortURL: req.params.id };
	res.render("urls_show", templateVars);
})

app.listen(PORT, () => { //Tells client hat server is running
	console.log(`Example app listening port ${PORT}!`);
});