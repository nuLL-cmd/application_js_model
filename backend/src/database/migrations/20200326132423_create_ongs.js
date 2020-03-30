//o metodo up sera usado para criar as tableas 
exports.up = function(knex) {
   return knex.schema.createTable('ongs', function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.string('phone').notNullable();
        table.string("email").notNullable();

    });
};
//usado para desgazer alguma ação que no caso sera deletada a tabela criada
exports.down = function(knex) {
        return knex.schema.dropTable('ongs');
};