const Joi = require('joi');

module.exports = [{
    method: 'GET',
    path: '/api/users',
    handler: function(request, reply){
        const sql ='SELECT * FROM users ORDER BY pk LIMIT 3';
        request.pg.client.query(sql, function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
},
/* {
    method: 'GET',
    path: '/api/users/{pk}',
    handler: function(request, reply){
        const { pk } = request.params;
        const sql ='SELECT * FROM users WHERE pk=$1';
        request.pg.client.query(sql, [pk], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
}, */
{
    method: 'POST',
    path: '/api/users',
    config:{
        handler: function(request, reply){
            
            const sql ='INSERT INTO users (nombre, apellido, fecha_nacimiento) VALUES ($1, $2, $3) RETURNING pk AS id, nombre, apellido';
            const { name } = request.payload;
            const { lastname } = request.payload
            const { birthdate } = request.payload
    
            request.pg.client.query(sql, [name, lastname, birthdate], function(err, result){
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
                name: Joi.string().min(1).max(10).required(),
                lastname: Joi.string().required(),
                birthdate: Joi.string().required()
    
            })
        }
    }
},
{
    method: 'PATCH',
    path: '/api/users',
    handler: function(request, reply){
        const sql ='UPDATE users SET  nombre = $1, apellido = $2, fecha_nacimiento = $3 WHERE pk = $4 RETURNING *';
        const { nombre } = request.payload;
        const { apellido } = request.payload
        const { fecha_nacimiento } = request.payload
        const { pk } = request.payload
        request.pg.client.query(sql, [nombre, apellido, fecha_nacimiento, pk], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply(result.rows);
        });
    }
},
{
    method: 'DELETE',
    path: '/api/users',
    handler: function(request, reply){
        const sql ='DELETE FROM users WHERE nombre = $1';
        const { name } = request.payload
        request.pg.client.query(sql, [name], function(err, result){
            if (err){
                return reply ([]);
            }
            return reply({deleted: true, message: 'registro eliminado!'});

        });
    }
}];