
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
    //id auto incremento
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    //relacionamento
    table.string('ong_id', 2).notNullable();

    //chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
