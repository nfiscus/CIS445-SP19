const http = require('http'); //how we require modules
const express = require('express');
const app = express();

app.get('/', function(request, response){
   response.writeHead(200);
   response.write('<html><body><p>Please specify an animal in the URL path.</p></body></html>');
   response.end();
});

app.get('/:animal', function(request, response){
    const animal = request.params.animal;
    response.writeHead(200); //status code in header; successfully connected
    response.write("<html><body><p>" + animal + " is running.</p>" + "<p>I see you are calling: " + animal + "</p>"); //response body
    response.end(animal + ' is done.');
});

app.delete('/:animal', function(request, response){
    const animal = request.params.animal;
    response.writeHead(200); //status code in header; successfully connected
    response.write("<html><body><p>You have terminated " + animal + ".</p></body></html>"); //response body
    response.end();
});

app.listen(8080, function(){
    console.log('express is now running on port 8080...');
});

/*http.createServer(function(request, response){
    let animal = 'not sure';
    if(request.url == '/cat/' || request.url == '/cat') animal = "cat";
    if(request.url == '/dog/' || request.url == '/dog') animal = "dog";
     //close the connection
    }, 5000); //wait 5 seconds before executing, "Dog is done."
}).listen(8080); //listen for connections on this port
console.log('Listening on port 8080...');
*/

//http route = path, method
//rest = CRUD; get, post, update, delete