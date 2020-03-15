require('colors');
require('dotenv');
require('./data/redis');

const express = require('express');

const urlRouter = require('./api/routes/url');
const log = require('./utils/log');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/url', urlRouter);

app.listen(PORT, () => {
  log(`Server started at port: ${PORT}.`.green.bold.underline);
});
