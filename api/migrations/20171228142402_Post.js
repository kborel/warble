
exports.up = knex =>
  knex.schema
    .createTable('Posts', (table) => {
      table.increments('id').primary();
      table.string('post');
    });

exports.down = knex =>
  knex.schema
    .dropTable('Posts');
