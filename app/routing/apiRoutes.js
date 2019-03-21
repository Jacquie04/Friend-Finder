var friendArray = require("../data/friends");



module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });



  app.post("/api/friends", function(req, res) {
  
    var newFriend = {
      name: req.body.name,
      pic: req.body.photo,
      scores: scoresArray
    };

    var scoresArray;

    for (var i =0; i < req.body.scores.length; i++) {
      scoresArray.push(parseInt(req.body.scores[i])
      )
    }
    
    var totalDifference = 0;

    for(var i=0; i < friendArray.length; i++) {

      var difference = 0;
      for(var j=0; j < newFriend.scores.length; j++) {

        difference += Math.abs( newFriend.scores[j] - friendArray[i].scores[j]);
      }
      totalDifference.push(difference);
    }

    var bestMatch = 0;

    for (var i = 1; i < totalDifference.length; i++) {

      if(totalDifference[i] <= totalDifference[bestMatch]) {
        bestMatch = i;
      }
    }
   
    };

    res.json(bestMatch);
    friendData.push(newFriend);

  });

};



     
