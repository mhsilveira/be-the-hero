const connection = require('../database/connection');

module.exports = {

    async index (request, response){
        const { page = 1 } = request.query;
        // const [count] é a mesma coisa que const count[0];
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select(['incidents.*', 'ongs.name', 'ongs.email']);
        response.header('X-Total-Count', count['count(*)'])
        return response.json(incidents);
    },

    async create (request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization;
        /**
         * A declaração abaixo diz o seguinte: Como o retorno desse insert é um array com uma unica posicao
         * poderiamos dar um return nome_array e pegar o primeiro indice. fazendo const [id] ja atribuimos isso.
         */
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })
        return response.json({ id });
    },

    async delete (request, response){
        const {id}   = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id){
            return response.status(401).json({
                error: "Operation denied!"
            });
        }
            await connection('incidents').where('id', id).delete();
            return response.status(204).send();
       }
    }