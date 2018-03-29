const hapi = require('hapi');


const server = new hapi.Server();
server.connection({
    host: '0.0.0.0',
    port:3000
});

server.register([{
    register: require('hapi-router'),
    options: {
        routes: 'routes/**/*.js'}
    }],
 function (err) {
        if(err) {
            console.log('Error cargando módulo');
        }
});
//server.route();

server.start(()=>{
console.log('Server running on: ', server.info.uri);
});

