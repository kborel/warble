const express = require('express');
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use(errorHandlers.notFound);

app.use(errorHandlers.validationErrors);

app.use(errorHandlers.productionErrors);

module.exports = app;
