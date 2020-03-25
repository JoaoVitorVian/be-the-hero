// up é o responsavel pela criação da tabela oq vai haver com a criação da migration
exports.up = function(knex) {
 return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();
  });
};
//Se der algum problema e precisar voltar atrás.
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
