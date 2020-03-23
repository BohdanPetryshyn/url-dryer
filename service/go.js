const redisDb = require('../setup/redisDb');

exports.getOriginalUrl = originalUrlId => {
  return redisDb.hget(originalUrlId, 'originalUrl');
};

exports.registerRedirect = originalUrlId => {
  return redisDb.hincrby(originalUrlId, 'redirects', 1);
};
