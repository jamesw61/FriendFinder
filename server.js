'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
// var fs = require('fs');
var PORT = process.env.PORT || 3000;
const log = x => console.log(x);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(express.static(path.join(__dirname)));





app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/app/public/home2.html"));
});

app.get('/survey.html', (req, res) => {
    res.sendFile(path.join(__dirname,"/app/public/survey.html"));
});


// app.get('/api/:characters?', (req, res) => {
//     var chosen = req.params.characters;
//     if (chosen) {
//         console.log(chosen);
//         for (let i in characters) {
//         	// console.log(characters[i].routeName);
//             if (chosen === characters[i].routeName) {
//                 return res.json(characters[i]);
//             }
//         }
//         return res.send("No character found");
//     }
//     return res.json(characters);
// });

app.post("/api/new", (req,res) => {
	var newCharacter = req.body;
	console.log(newCharacter);
});

app.listen(PORT, () => {
    log(`Listening on ${PORT}`);
});



