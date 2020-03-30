const con = require('../database/connection')

module.exports ={

    async create(request, response){
        const {title, description,value} = request.body;
        const ong_id = request.headers.authorization;
        const [id] = await con('cases').insert({
            title,
            description,
            value,
            ong_id
        })
        
    return response.json({id})
    },

    async index(request, response){
        const {page = 1} = request.query;
        const [count] = await con('cases').count();

    
        console.log(count);
        const cases = await con('cases')
        .join('ongs', 'ongs.id', '=', 'cases.ong_id')
        .limit(5)
        .offset((page - 1)*5)
        .select(['cases.*','ongs.phone', 'ongs.name', 'ongs.email', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count',count['count(*)'])

        return response.json(cases);
    },

    async delete(request, response){
        const ong_id = request.headers.authorization;
        const {id} = request.params;

        await con('cases').where({
            ong_id : ong_id,
            id : id
        }).del();

        return response.status(204).send();
    }

}