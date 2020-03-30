const con = require('../database/connection');

module.exports = {
   async indexAll(request, response){
       const ong_id = request.headers.authorization;
       const cases = await con('cases').select('*').where('ong_id', ong_id);

       response.json({cases});
   } 
}