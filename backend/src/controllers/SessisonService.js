const con = require('../database/connection');

module.exports = {
    async login(request, response){
        const {id} = request.body;
        const ong = await con('ongs')
        .select('name')
        .where('id', id)
        .first();

        if(!ong){
            return response.status(400).json({
                error: 'No ONG found with this ID.'
            });
        }
        return response.json({ong});
    }
}