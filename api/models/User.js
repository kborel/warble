const { Model } = require('objection');
const Visibility = require('objection-visibility');

const Password = require('objection-password')({
  passwordField: 'hash',
});
const Unique = require('objection-unique')({
  fields: ['username'],
});

class User extends Visibility(Password(Unique(Model))) {
  static get tableName() {
    return 'users';
  }

  static get hidden() {
    return ['hash'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['username', 'hash', 'name'],
      properties: {
        username: { type: 'string' },
        name: { type: 'string' },
        hash: { type: 'string' },
      },
    };
  }
}

module.exports = User;
