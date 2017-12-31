exports.up = async (knex) => {
  await knex.schema.renameTable('Posts', 'posts');
  await knex.schema.alterTable('posts', (t) => {
    t.renameColumn('post', 'text');
    t.text('post').notNullable().alter();
  });
};

exports.down = async (knex) => {
  await knex.schema.renameTable('posts', 'Posts');
  await knex.schema.alterTable('Posts', (t) => {
    t.renameColumn('text', 'post');
    t.string('text').alter();
  });
};
