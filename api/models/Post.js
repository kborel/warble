const { Model } = require('objection');
const Visibility = require('objection-visibility');
const User = require('./User');

class Post extends Visibility(Model) {
  static get tableName() {
    return 'posts';
  }

  static get hidden() {
    return ['user_id'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text', 'user_id'],
      properties: {
        text: { type: 'string', minLength: 1, maxLength: 280 },
        user_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'posts.user_id',
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Post;
