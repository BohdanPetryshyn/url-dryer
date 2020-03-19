require('colors');
require('dotenv').config();
require('./setup/redisDb');

const expressApp = require('./setup/expressApp');
const log = require('./utils/log');

const PORT = process.env.PORT || 8080;

expressApp.listen(PORT, () => {
  log(`Server started at port: ${PORT}.`.green.bold.underline);
});
