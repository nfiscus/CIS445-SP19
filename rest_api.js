var players = require('./players.json');
var items = require('./items.json');
var locations = require('./locations.json');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.raw({ inflate: true, limit: '100kb', type: 'text/xml' }));

app.get('/', function(request, response){
   response.writeHead(200);
   request.bodyParser.raw();
   response.write('<html><body><p>Please specify an action in the URL path.</p></body></html>');
   response.end();
});

app.delete('/items/delete/:itemid', function(request, response){
   const id = request.params.itemid;
   let item = null;
   for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            item = items[i];
            break;
        }
   }
   if (item != null) {
       response.write('<html><body><p>You have reached the delete screen for ' + item.name);
   } else {
      response.write('Please enter a valid item ID.</p></body></html>'); 
   }
   response.end();
   
}).get('/items', function(request, response) {
    
   response.writeHead(200);
   response.end(JSON.stringify(items, null, 3));
   
}).get('/items/:itemid', function(request, response) {
    
   response.writeHead(200);
   const id = request.params.itemid;
   let item = 'Item not found';
   for (var i = 0; i < items.length; i++) {
       if (items[i].id == id) {
           item = items[i];
           break;
       }
   }
   response.end(JSON.stringify(item, null, 3));
   
}).post('/items/add/:itemid', function(request, response) {
    
   const id = request.params.itemid;
   let newItem = {id: id, name: 'Default Name', effect: 'Default Effect'};
   items.push(newItem);
   response.write('<html><body><p>A new item has been added.</p></body></html>\n');
   response.end(JSON.stringify(items, null, 3));
    
}).put('/items/update/:itemid', function(request, response){
    
   const id = request.params.itemid;
   let item = null;
   for (var i = 0; i < players.length; i++) {
        if (items[i].id == id) {
            item = items[i];
            break;
        }
   }
   if (item != null) {
       response.write('<html><body><p>You have reached the update screen for the ' + item.name);
   } else {
      response.write('Please enter a valid item ID.</p></body></html>'); 
   }
   response.end();
   
});

app.delete('/locations/delete/:locationid', function(request, response) {
    
    const id = request.params.locationid;
    let location = null;
    for (var i = 0; i < locations.length; i++) {
        if (locations[i].id == id) {
            location = locations[i];
            break;
        }
    }
    if (location != null) {
        response.write('<html><body><p>You have reached the delete screen for ' + location.name);
    } else {
        response.write('Please enter a valid location ID.</p></body></html>');
    }
    response.end();
    
}).get('/locations', function(request, response) {
    
    response.writeHead(200);
    response.end(JSON.stringify(locations, null, 3));
    
}).get('/locations/:locationid', function(request, response) {
    
    const id = request.params.locationid;
    let location = 'Location not found.';
    response.writeHead(200); //status code in header; successfully connected
    for (var i = 0; i < locations.length; i++) {
        if (locations[i].id == id) {
            location = locations[i];
            break;
        }
    }
    response.end(JSON.stringify(location, null, 3));
    
}).post('/locations/add/:locationid', function(request, response) {
    
   const id = request.params.locationid;
   let newLocation = {id: id, name: 'Default Name'};
   locations.push(newLocation);
   response.write('<html><body><p>A new location has been added.\n</p></body></html>');
   response.end(JSON.stringify(locations, null, 3));
    
}).put('/locations/update/:locationid', function(request, response){
    
   const id = request.params.locationid;
   let location = null;
   for (var i = 0; i < locations.length; i++) {
        if (locations[i].id == id) {
            location = locations[i];
            break;
        }
   }
   if (location != null) {
       response.write('<html><body><p>You have reached the update screen for ' + location.name);
   } else {
      response.write('Please enter a valid location ID.</p></body></html>');
   }
   response.end();
});

app.delete('/players/delete/:playerid', function(request, response){
    
   const id = request.params.playerid;
   let player = null;
   for (var i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            player = players[i];
            break;
        }
   }
   if (player != null) {
       response.write('<html><body><p>You have reached the delete screen for ' + player.name);
   } else {
      response.write('Please enter a valid player ID.</p></body></html>'); 
   }
   response.end();
   
}).get('/players', function(request, response){
    
    response.writeHead(200); //status code in header; successfully connected
    response.end(JSON.stringify(players, null, 3));
    
}).get('/players/:playerid', function(request, response){
    
    const id = request.params.playerid;
    let player = 'Player not found.';
    response.writeHead(200); //status code in header; successfully connected
    for (var i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            player = players[i];
            break;
        }
    }
    response.end(JSON.stringify(player, null, 3));
    
}).post('/players/add/:playerid', function(request, response) {
    
   const id = request.params.playerid;
   let newPlayer = {id: id, name: 'Default Name', occupation: 'Default Occupation'};
   players.push(newPlayer);
   response.write('<html><body><p>A new player has been added.\n</p></body></html>');
   response.end(JSON.stringify(players, null, 3));
   
}).put('/players/update/:playerid', function(request, response){
    
   const id = request.params.playerid;
   let player = null;
   for (var i = 0; i < players.length; i++) {
        if (players[i].id == id) {
            player = players[i];
            break;
        }
   }
   if (player != null) {
       response.write('<html><body><p>You have reached the update screen for ' + player.name);
   } else {
      response.write('Please enter a valid player ID.</p></body></html>');
   }
   response.end();
});

app.listen(8080, function(){
    console.log('express is now running on port 8080...');
});