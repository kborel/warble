const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const errorHandlers = require('./handlers/errorHandlers');
require('./handlers/passport');

const app = express();

const config = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  exposedHeaders: 'Authorization',
};

app.use(cors(config));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());

app.use('/', routes);

app.use(errorHandlers.notFound);

app.use(errorHandlers.validationErrors);

app.use(errorHandlers.productionErrors);

module.exports = app;
