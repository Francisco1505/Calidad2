const Joi = require('joi');
module.exports = [{
    method: 'GET',
    path: '/api/customers',
    handler: function(request, reply){
        const sql ='SELECT * FROM customers';
        request.pg.client.query(sql, function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
},
{
    method: 'GET',
    path: '/api/customers/{pk}',
    handler: function(request, reply){
        const { pk } = request.params;
        const sql ='SELECT * FROM customers WHERE pk=$1';
        request.pg.client.query(sql, [pk], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
},
{
    method: 'POST',
    path: '/api/customers',
    config:{
        handler: function(request, reply){
            
            const sql ='INSERT INTO customers (nombre_cliente, numero_documento, direccion) VALUES ($1, $2, $3) RETURNING *';
            const { nombre } = request.payload;
            const { rut } = request.payload;
            const { direccion } = request.payload;
         // const  direccion  = request.payload.direccionVariable  la forma de arriba es solo una forma de abreviar
         // si la variable q llega se llamara igual q la constante q la recive se abrevoian como las lineas anteriores
            request.pg.client.query(sql, [nombre, rut, direccion], function(err, result){
               
               console.log(sql);
               console.log(nombre);
               console.log(rut);
               console.log(direccion);
               
                if (err){
                    return reply ([]);
                }
                return reply(result.rows);
            });
        },
        validate : {//funcion para validar del modulo JOI   
            payload: Joi.object().keys({
                nombre: Joi.string().min(1).max(10).required(),
                rut: Joi.string().required(),
                direccion: Joi.string().required()
    
            })
        }
    }
},
{
    method: 'PATCH',
    path: '/api/customers',
    handler: function(request, reply){
        const sql ='UPDATE customers SET  nombre_cliente = $1, numero_documento = $2, direccion = $3 WHERE pk = $4 RETURNING *';
        const { nombre } = request.payload;
        const { rut } = request.payload
        const { direccion } = request.payload
        const { pk } = request.payload
        request.pg.client.query(sql, [nombre, rut, direccion, pk], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
},
{
    method: 'DELETE',
    path: '/api/customers',
    handler: function(request, reply){
        const sql ='DELETE FROM customers  WHERE pk = $1';
        const { pk } = request.payload
        request.pg.client.query(sql, [pk], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
}];