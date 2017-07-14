'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
const log = x => console.log(x);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/app/public/home.html"));
});

app.get('/survey.html', (req, res) => {
    res.sendFile(path.join(__dirname,"/app/public/survey.html"));
});

app.post("/api/new", (req,res) => {
	var newCharacter = req.body;
	log(newCharacter);
});

app.listen(PORT, () => {
    log(`Listening on ${PORT}`);
});



