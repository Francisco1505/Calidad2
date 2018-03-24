const express = require('express');

const server = express();

server.get('/', function(request, response){
    response.send('Hello root');
});
server.post('/usuarios', function(request, response){
    //response.send('Hello user');
    var usuarios = {
       name:'Juanito',
       lastname: 'Perez',
       username:'JP',
       password:'1234'
    };
    response.send(usuarios);
});
 server.listen(3000, function(){
    console.log('Server running on http://localhost:3000');
 });