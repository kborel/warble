const { Model } = require('objection');

class Post extends Model {
  static get tableName() {
    return 'posts';
  }

  text() {
    return this.text;
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['text'],
      properties: {
        text: { type: 'string', minLength: 1, maxLength: 280 },
      },
    };
  }
}

module.exports = Post;
