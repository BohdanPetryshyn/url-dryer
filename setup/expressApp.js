const express = require('express');
const { json } = require('express');

const urlRouter = require('../api/routes/shortenedUrl');
const goRouter = require('../api/routes/go');
const morgan = require('./morgan');

const app = express();

app.use(json());
app.use(morgan);

app.use('/shortenedUrl', urlRouter);
app.use('/go', goRouter);

module.exports = app;
