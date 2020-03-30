const con = require('../database/connection')
//Biblioteca do nodejs que permite criptografar um dado, mas aqui esta sendo usado para gerar valores randomicos do tipo hex
const crypto = require('crypto');

// nao é necessar
module.exports = {
    //async usado para definir como uma funcção assincrona ou seja, o node aguarda a execução dessa função para que possa partir para a proxima chamada
    async crate(request, response){
    
        const {name, city, uf, phone, email} = request.body
        //utilização do crypto para gerar valores randomicos do tipo hex
        const id = crypto.randomBytes(4).toString('HEX');
        // tratando se de uma inserção no banco, o await é usado para definir que essa instrução deverar esperar sua concl usao para prosseguir
        await  con('ongs').insert({
            id,
            name,
            city,
            uf,
            phone,
            email,
        });
        
        //e por fim retornando em formato json apenas o id
        return response.json({id});
    },

    async index(request, response){
            const ongs = await con.select('*').from('ongs')
            return  response.json(ongs);
    }
}