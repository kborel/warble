
exports.up = knex =>
  knex.schema
    .createTable('users', (table) => {
      table.increments('id').primary();
      table.text('name').notNullable();
      table.text('username').notNullable().unique();
      table.text('hash').notNullable();
    })
    .createTable('posts', (table) => {
      table.increments('id').primary();
      table.text('text').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.integer('user_id').references('id').inTable('users').notNullable();
    });
exports.down = knex =>
  knex.schema
    .dropTable('Posts');

