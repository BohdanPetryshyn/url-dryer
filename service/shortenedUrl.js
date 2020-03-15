const redisDb = require('../setup/redisDb');
const toUrlIdentifier = require('../utils/toUrlIdentifier');

exports.createShortenedUrl = async url => {
  const lastUrlCounter = await redisDb.incr('lastUrl');
  const shortenedUrl = toUrlIdentifier(lastUrlCounter);

  await redisDb.hset(shortenedUrl, 'originalUrl', url);

  return shortenedUrl;
};
