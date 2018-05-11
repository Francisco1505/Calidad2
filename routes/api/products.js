const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/api/products',
        config : 
        {
            handler: function(request, reply){
                const sql ='SELECT * FROM products';
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
        method: 'POST',
        path: '/api/products',
        config:{
            handler: function(request, reply){
                
                const sql ='INSERT INTO products (name, code, price, active) VALUES ($1, $2, $3, $4) RETURNING pk';
                const { name } = request.payload;
                const { code } = request.payload
                const { price } = request.payload
                const { active } = request.payload
        
                request.pg.client.query(sql, [name, code, price, active], function(err, result){
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
                    code: Joi.string().required(),
                    price: Joi.number().required(),
                    active: Joi.boolean().required(),
                })
            }
        }
    },

    {
        method: 'PATCH',
        path: '/api/products',
        config: {
            handler: function(request, reply){
                const sql ='UPDATE products SET  name = $1, code = $2, price = $3, active = $4 WHERE pk = $5 RETURNING *';
                const { name } = request.payload;
                const { code } = request.payload
                const { price } = request.payload
                const { active } = request.payload
                const { pk } = request.payload
                request.pg.client.query(sql, [name, code, price, active, pk], function(err, result){
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
        path: '/api/products',
        config:{
            handler: function(request, reply){
                const sql ='DELETE FROM products WHERE name = $1';
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