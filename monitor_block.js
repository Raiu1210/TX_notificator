const request = require('request');

var counter = 0;
var block_height = 0;

var current_info = {
    url: 'https://blockbook.electrum-mona.org/api/',
    method: 'GET'
}


setInterval(function() {
	request(current_info, function (error, response, body) {
		parsed_json = JSON.parse(body)
		console.log("Now : " + parsed_json["blockbook"]["bestHeight"])
		
		if (counter == 0) {
			counter = 1;
		} else {
			while (block_height < parseInt(parsed_json["blockbook"]["bestHeight"], 10)) {

				var block_info = {
					url: 'https://blockbook.electrum-mona.org/api/v1/block/' + block_height,
					method: 'GET'
				}

				request(block_info, function (error, response, block_data) {
					console.log(JSON.parse(block_data))

				})

				console.log(block_height + 1)
				block_height += 1
			}
		}
	
		block_height = parseInt(parsed_json["blockbook"]["bestHeight"], 10)
	})
}, 10000);