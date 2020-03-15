const express = require('express');
const { json } = require('express');
const morgan = require('morgan');

const urlRouter = require('../api/routes/url');

const app = express();

app.use(json());
app.use(morgan('tiny'));

app.use('/url', urlRouter);

module.exports = app;
