'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
// var friends = require('../data/friends.js');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(express.static(path.join(__dirname)));
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);




app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});



