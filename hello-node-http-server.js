var http = require('http');
var port = 8180;

// Handle the GET requests from client
function handle_GET_request(response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	// Print in the browser
	response.end('Get action was requested');
}

// Handle the POST requests from client
function handle_POST_request(response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	// Print in the browser
	response.end('Post action was requested');
}

// Handle the PUT requests of client
function handle_PUT_request(response) {
	response.writeHead(200, {
		'Content-Type':'text/plain'
	});
	// Print in browser
	response.end('Put action was requested');
}

// Handle the HEAD response of client
function handle_HEAD_request(response) {
	response.writeHead(200, {
		'cContent-Type': 'text/plain'
	});
	// Print in browser
	response.end('Head action was requested');
}

function handle_DELETE_request(response) {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.end('Delete action was requested');
}

function handle_bad_request(response) {
	response.writeHead(400, {
		'Content-Type': 'text/plain'
	});
	response.end('Bad request');
}

// The main function that has logic
function handle_request(request, response) {
	switch (request.method) {
		case 'GET':
			handle_GET_request(response);
			break;
		case 'POST':
			handle_POST_request(response);
			break;
		case 'PUT':
			handle_PUT_request(response);
			break;
		case 'DELETE':
			handle_HEAD_request(response);
			break;
		default:
			handle_bad_request(response);
			break;
	}
	console.log('Request processing ended');
}

http.createServer(handle_request).listen(port, '127.0.0.1');

console.log('Started Node.js http server at http://127.0.0.1:' + port);