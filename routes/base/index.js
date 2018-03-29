module.exports = [{
        // method:['GET','POST'] // hapi posee la capacidad de 
        method: 'GET',
        path: '/',
        handler:(request, reply)=>{
            reply('Hola raiz');
        }
  }];