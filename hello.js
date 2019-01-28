const http = require('http'); //how we require modules

http.createServer(function(request, response){
    response.writeHead(200); //status code in header
    response.write("<html><body><p>Dog is running.</p>"); //response body
    setTimeout(function(){
        response.write("<p>Dog is done.</p></body></html>");
        response.end(); //close the connection
    }, 5000);
}).listen(8080); //listen for connections on this port
console.log('Listening on port 8080...');