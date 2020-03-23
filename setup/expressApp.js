const express = require('express');
const { json } = require('express');

const urlRouter = require('../api/routes/shortenedUrl');
const goRouter = require('../api/routes/go');
const morgan = require('./morgan');
const handleApiError = require('../middleware/handleApiError');

const app = express();

app.use(json());
app.use(morgan);

app.use('/shortenedUrl', urlRouter);
app.use('/go', goRouter);

app.use(handleApiError);

module.exports = app;
