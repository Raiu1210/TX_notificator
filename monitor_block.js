const request = require('request');

var options = {
    url: 'https://blockbook.electrum-mona.org/api/',
    method: 'GET'
}




setInterval(function() {
	request(options, function (error, response, body) {
    	parsed_json = JSON.parse(body)
    	console.log(parsed_json["blockbook"]["bestHeight"])
	})
}, 100000);