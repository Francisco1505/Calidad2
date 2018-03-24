
const http = require('http');
const url = require('url');

//const hostname='localhost'//funciona solo en la maquina
//const hostname='127.0.0.1'//solo los ven los q estan en la misma red

const hostname='0.0.0.0'//lo ve de cualquier red
const port = 3000;

const server = http.createServer(function(request, response){
    //console.log(request.url);
    //console.log(request.method);
    var url_parts = url.parse(request.url)
    const ruta = url_parts.path;
    switch(ruta){
        case'/':
        //console.log('Soy la raiz');
        responder(response, 200, 'Hola root');
        break;

        case'/usuarios':
        //console.log('Soy usuario');
        responder(response, 200, 'Hola usuario');
        break;

        default:
        ///console.log('Soy cualquier cosa');
        
        responder(response, 404, 'Not found');
    }
    /*console.log(url_parts);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello world\n');*/
});
function responder(response, status, text){
    response.statusCode = status;
    response.setHeader('Content-Type', 'text/plain');
    response.end(text);
};

 server.listen(port, hostname, function(){
     console.log(`Server running on http//${hostname}:${port}`);
 });