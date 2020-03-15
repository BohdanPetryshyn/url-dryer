const morgan = require('morgan');

if (process.env.ENV === 'PROD') {
  module.exports = morgan('common');
} else {
  module.exports = morgan('dev');
}
