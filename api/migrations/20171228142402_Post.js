
exports.up = (knex, Promise) =>
  knex.schema
    .createTable('Posts', (table) => {
      table.increments('id').primary();
      table.string('post');
    });

exports.down = (knex, Promise) =>
  knex.schema
    .dropTable('Posts');
