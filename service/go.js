const redisDb = require('../setup/redisDb');

exports.getOriginalUrl = originalUrlId => {
  return redisDb.hget(originalUrlId, 'originalUrl');
};
