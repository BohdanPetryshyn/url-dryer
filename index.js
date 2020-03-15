require('colors');
require('dotenv');
require('./data/redis');

const expressApp = require('./setup/expressApp');
const log = require('./utils/log');

const PORT = process.env.PORT || 3000;

expressApp.listen(PORT, () => {
  log(`Server started at port: ${PORT}.`.green.bold.underline);
});
