const express = require('express');
const { json } = require('express');

const urlRouter = require('../api/routes/url');
const morgan = require('./morgan');

const app = express();

app.use(json());
app.use(morgan);

app.use('/url', urlRouter);

module.exports = app;
