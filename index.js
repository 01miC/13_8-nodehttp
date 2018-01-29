var http = require('http');
var fs = require('fs');

var server = http.createServer(); 

server.on('request', function (request, response) {
        
            if (request.method === "GET" && request.url === '/index.html') {
                response.setHeader('Content-Type', 'text/html; charset=utf-8');
                fs.readFile('./html/index.html','utf-8', function(err, data) {
                    response.write(data);
                    response.end();
                });
            } else {
                response.statusCode = 404;
                fs.readFile('./html/404.jpg', function(err, data) {
                    response.writeHead(200, {'Content-Type': 'image/jpeg'});
                    response.end(data); // Send the file data to the browser.
                });
            }
            
});
server.listen(9000);