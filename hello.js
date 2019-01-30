const http = require('http'); //how we require modules

http.createServer(function(request, response){
    response.writeHead(200); //status code in header; successfully connected
    response.write("<html><body><p>Dog is running.</p>"); //response body
    setTimeout(function(){
       // response.write("<html><body><p>Dog is done.</p></body></html>");
        response.end('Dog is done.'); //close the connection
    }, 5000); //wait 5 seconds before executing, "Dog is done."
}).listen(8080); //listen for connections on this port
console.log('Listening on port 8080...');