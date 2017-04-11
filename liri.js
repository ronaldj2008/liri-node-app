
var keys = require("./keys.js");

var Twitter = require("twitter");

var spotify = require("spotify");

var request = require("request");

var fs = require("fs");

// var returnArtist = function(artist){
// 	return artist.name;
// };

// var returnSpotify = function(songName){
// 	if(songName === undefined) {
// 		songName = "Friday";
// 	}

// 	spotify.search({
// 		type: "track",
// 		query: songName
// 	}, function(err, data){
// 	if (err){
// 		console.log("Error:" + err);
// 		return;
// 	}

// 	var tracks = data.tracks.items;

// 	for(var = 0; i < tracks.length; i++) {
// 		console.log("artist(s): " + tracks[i].artist.map(returnArtist));
// 		console.log("song")
// 	} 
// }


var getMyTweets = function() {

    var client = new Twitter(keys.twitterKeys);

    var params = {
        screen_name: "Ron_Josiah"
    };

    client.get("statuses/user_timeline", params, function(error, tweets, response) {
            if (!error) {
            for(var i = 0; i < tweets.length; i++) {	
                console.log(tweets[i].created_at);
                console.log("");
                console.log(tweets[i].text);
            }
        }

    });
};


var executeThisCommand = function(){
	fs.readFile("random.txt", "utf8", function(error, data){
		console.log(data);

		var dataArr = data.split(",");

		if(dataArr.length === 2) {
			pick(dataArr[0], dataArr[1]);
		}
		else if(dataArr.length === 1) {
			pick(dataArr[0]);
		}
	});

};

var pick = function(caseData, functionData) {
	switch (caseData){
		case "my-tweets":
		getMyTweets();
		break;
	}
};

var runThis = function(argOne, argTwo) {
	pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);
