var TwitterPackage = require('twitter');

var secret = {

consumer_key: 'bMPWvv2opwdfaVQPWjUFs94OG',
  consumer_secret: 'b7ViKJbBnvpaSeBT2wsTgVD5PLWy90htO4HCQtu0BsvMqvtQ1k',
  access_token_key: '25022281-qMMOQI3rfgltrlQz7gWcQz0fcQJXcxyHTszMOoGBq',
  access_token_secret: 'ZltMjcPIBc91AXHo2kh6Dayd0xIXv7SxhoexI7oLjxgHt'
}

var Twitter = new TwitterPackage(secret);

Twitter.post('statuses/update', {status: 'Posting from my node Twitter bot.  What up?'}, function(error, tweet, response){
	if(error){
		console.log(error);

	}
	console.log(tweet);
	console.log(response);
});