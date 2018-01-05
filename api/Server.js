const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

require('dotenv').config();

const app = require('./app');

const knex = Knex(knexConfig);

Model.knex(knex);

app.set('port', process.env.PORT || 7777);
app.listen(app.get('port'));
