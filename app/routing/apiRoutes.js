'use strict'
var friends = require('../data/friends.js');

module.exports = (app) => {
    app.post("/new", (req, res) => {
        var user = req.body;
        let tot = 0;
        let minDiff = 100;
        let diff = 0;
        var friendArray = [];
        for (let j in friends) {
            for (let i in user.scores) {
                diff = Math.abs(parseInt(user.scores[i]) - parseInt(friends[j].scores[i]));
                tot += diff;
            }
            if (tot < minDiff) {
                friendArray = [];
                minDiff = tot;
                friendArray.push(friends[j]);
                }
            else if (tot === minDiff) {
                friendArray.push(friends[j]);
            }
            tot=0;
        }
        friends.push(user);
        res.send(friendArray);
    });

    app.get('/friends', (req, res) => {
        res.json(friends);
    });
}