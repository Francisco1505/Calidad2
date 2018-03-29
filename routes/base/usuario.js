module.exports = [{
    // method:['GET','POST'] // hapi posee la capacidad de 
    method: 'GET',
    path: '/usuarios',
    handler:(request, reply)=>{
        reply('Hola usuarios');
    }
}];