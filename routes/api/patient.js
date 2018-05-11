const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/api/patient/',
        config : 
        {
            handler: function(request, reply){
                const sql ='SELECT * FROM patient';
                request.pg.client.query(sql, function(err, result){
                    if (err){
                        return reply ([]);
                    }
                    return reply(result.rows);
                });
            }
        }
       
    },
    {
        method: 'GET',
        path: '/api/patient/name',
        config:
        {
            handler: function(request, reply){
                const { name } = request.query;
                console.log(name);
                const sql ='SELECT pk, name AS nombre, lastname AS apellido, birthdate AS nacimiento FROM patient WHERE name=$1';
                request.pg.client.query(sql, [name], function(err, result){
                    if (err){
                        return reply ([]);
                    }
                    if(result.rows.length > 0) {
                        return reply(result.rows[0]);
                    }  
                });
            }
        }    
    },

    {
        method: 'POST',
        path: '/api/patient/',
        config:{
            handler: function(request, reply){
                
                const sql ='INSERT INTO patient (name, lastname, email, birthdate) VALUES ($1, $2, $3, $4) RETURNING pk, name AS nombre';
                const { name } = request.payload;
                const { lastname } = request.payload
                const { email } = request.payload
                const { birthdate } = request.payload
        
                request.pg.client.query(sql, [name, lastname, email, birthdate], function(err, result){
                    if (err){
                        
                        return reply ([]);
                    }
                    if(result.rows.length > 0) {
                        return reply(result.rows[0]);
                       
                    }
                });
            },
            validate : {
                payload: Joi.object().keys({
                    name: Joi.string().required(),
                    lastname: Joi.empty().required(),
                    email: Joi.string().email().required(),
                    birthdate: Joi.string().required(),
                })
            }
        }
    },

    {
        method: 'PATCH',
        path: '/api/patient/',
        config: {
            handler: function(request, reply){
                const sql ='UPDATE patient SET  name = $1, lastname = $2, birthdate = $3 WHERE pk = $4 RETURNING *';
                const { name } = request.payload;
                const { lastname } = request.payload
                const { birthdate } = request.payload
                const { pk } = request.payload
                
                request.pg.client.query(sql, [name, lastname, birthdate, pk], function(err, result){
                    if (err){
                        return reply ([]);
                    }
                    return reply(result.rows);
                });
            },
            validate : {
                payload: Joi.object().keys({
                    name: Joi.string().required(),
                    lastname: Joi.string().required(),
                    birthdate: Joi.string().required()
        
                })
            }
        }
    },

    {
        method: 'DELETE',
        path: '/api/patient/',
        config:{
            handler: function(request, reply){
                const sql ='DELETE FROM patient WHERE name = $1';
                const { name } = request.payload
                request.pg.client.query(sql, [name], function(err, result){
                    if (err){
                        return reply ([]);
                    }
                    return reply({deleted: true, message: 'registro eliminado!'});
        
                });
            },
            validate : 
            {
                payload: Joi.object().keys({
                    name: Joi.string().required()
        
                })
            }
       }
    }

];