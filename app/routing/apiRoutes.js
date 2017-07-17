'use strict'
var friends = require('../data/friends.js');

module.exports = (app) => {
    app.post("/new", (req, res) => {
        var user = req.body;
        console.log(user);
        // console.log(friends.compare(user));

        let tot = 0;
        let minDiff = 100;
        let diff = 0;
        var friendArray = [];
        var matchedFriend = "n/a";
        var matchedPhoto = "sldfh";
        for (let j in friends) {
            // console.log(friends[j].name);
            for (let i in user.scores) {
            	console.log('---')
            	console.log(friends[j].name);
                console.log(user.scores[i] + ":" + friends[j].scores[i]);
                diff = Math.abs(parseInt(user.scores[i]) - parseInt(friends[j].scores[i]));
                console.log(diff);
                tot += diff;
                console.log('---' + tot);
            }
            console.log(friends[j].name + " total difference: " + tot);
            if (tot < minDiff) {
                friendArray = [];
                matchedFriend = friends[j];
                matchedPhoto = friends[j].photo;
                minDiff = tot;
                friendArray.push(matchedFriend);
                }
            else if (tot = minDiff) {
                matchedFriend = friends[j];
                matchedPhoto = friends[j].photo;
                minDiff = tot;
                friendArray.push(matchedFriend);
            }
            tot=0;






        }
        friends.push(user);
        // res.send(matchedFriend);
        res.send(friendArray);

    });

    app.get('/friends', (req, res) => {
        res.json(friends);
    });
}