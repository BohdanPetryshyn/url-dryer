require('dotenv');
require('colors');

const express = require('express');

const urlRouter = require('./api/routes/url');

const PORT = process.env.PORT || 3000;
const PID = process.pid;

const app = express();

app.use('/url', urlRouter);

app.listen(PORT, () => {
  console.log(
    `Server started at port: ${PORT}. PID: ${PID}`.green.bold.underline
  );
});
