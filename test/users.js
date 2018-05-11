const Lab = require('lab');
const Code = require('code');
const Server = require('../index');

const lab = exports.lab = Lab.script();

lab.experiment('Pruebas de usuario', function(){

    // lab.test('Evaluar ruta /api/users con GET = status 200', function(done){
    //     var options =
    //     {
    //         method:'GET',
    //         url:'/api/users'
    //     };
    //     Server.inject(options,function(response)
    //     {
    //         const result = response.result;
    //         Code.expect(response.statusCode).to.equal(200);
    //         Code.expect(result).to.be.instanceof(Array);
    //         done();
    //     });
    // });
    // lab.test('Evaluar ruta /api/users con POST sin datos  = status 400', function(done){
    //     var options =
    //     {
    //         method:'POST',
    //         url:'/api/users'
    //     };
    //     Server.inject(options,function(response)
    //     {
    //         Code.expect(response.statusCode).to.equal(400);
    //         done();
    //     });
    // });

    // /////////Pruebas Profe
    // lab.test("Probando GET /API/USERS STATUS 200 Y cantidad de datos 3", function(done) {
    //     var options = {
    //         method: "GET",
    //         url: "/api/users"
    //     };
    
    //     Server.inject(options, function(response) {
    //         var result = response.result;
    //         Code.expect(response.statusCode).to.equal(200);
    //         Code.expect(result).to.be.instanceof(Array);
    //         Code.expect(result).to.have.length(3);
    //         done();
    //     });
    // });
    // lab.test("Probando POST /API/USERS Con Todos los Datos STATUS 200 Y RESPUESTA", function(done) {
    //     var options = {
    //         method: "POST",
    //         url: "/api/users",
    //         payload: {
    //             name: 'testing',
    //             lastname: 'Hapi',
    //             birthdate: '2018-04-01'
    //         }
    //     };
    
    //     Server.inject(options, function(response) {
    //         var result = response.result;
    //         console.log(response.statusCode);
    //         Code.expect(response.statusCode).to.equal(200);
    //         Code.expect(result).to.be.instanceof(Object);
    //         Code.expect(result).to.contain(['id', 'nombre', 'apellido']);
    //         done();
    //     });
    // });
    
    // lab.test("Probando DELETE /API/USERS STATUS 200 Y RESPUESTA", function(done) {
    //     var options = {
    //         method: "DELETE",
    //         url: "/api/users",
    //         payload: {
    //             name: 'testing'
    //         }
    //     };
    
    //     Server.inject(options, function(response) {
    //         var result = response.result;
    //         //Esto es lo que espera que haga la api
    //         Code.expect(response.statusCode).to.equal(200);//debe responder con el status code
    //         Code.expect(result).to.part.include({ deleted: true });//el resultado al menos una parte debe tener un objeto                                                     //
    //         done();                                             //{} con deleted true
    //     });
    // });
});


