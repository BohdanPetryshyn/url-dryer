const express = require('express');
const { json } = require('express');

const urlRouter = require('../api/routes/shortenedUrl');
const morgan = require('./morgan');

const app = express();

app.use(json());
app.use(morgan);

app.use('/shortenedUrl', urlRouter);

module.exports = app;
