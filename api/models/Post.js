const { Model } = require('objection');

class Post extends Model {
  static get tableName() {
    return 'Posts';
  }

  post() {
    return this.post;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['post'],
      properties: {
        post: { type: 'string', minLength: 1, maxLength: 280 },
      },
    };
  }
}

module.exports = Post;
