module.exports = [{
    // method:['GET','POST'] // hapi posee la capacidad de 
    method: 'GET',
    path: '/contacto',
    handler:function(request, reply){
        reply.file('./views/contacto.html');
    }
}];