var http = require('http');
var port = 8180;

// Handle all requests indiscriminately with a single response
// Note that we are creating only the response here.
// The request is the job of the client and not the API developer
// We simply assume that the client knows that we are building a RESTful API
function handle_request(request, response) {
	response.writeHead(200, { // This is the HTTP code of OK
		'Content-Type': 'text/plain' // This is the type of response
	});
	
	// This will be printed out on the screen of the browser after the response
	response.end('Hello World. Are you restless to go restful?\n');
		// Print in the terminal of developer and not the client's browser
		console.log('requested');
}

// Command to create a server on the fly
// It listens to a local client on 127.0.0.1 which is the browser
http.createServer(handle_request).listen(port, '127.0.0.1');

// Print out on terminal of developer who starts the server
console.log('Started Node.js http server at http://127.0.0.1:' +port);