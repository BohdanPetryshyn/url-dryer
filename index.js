require('dotenv');
require('colors');

const express = require('express');

const PORT = process.env.PORT || 3000;
const PID = process.pid;

const app = express();

app.listen(PORT, () => {
  console.log(
    `Server started at port: ${PORT}. PID: ${PID}`.green.bold.underline
  );
});
