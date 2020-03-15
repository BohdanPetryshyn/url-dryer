const redis = require('../data/redis');
const toUrlIdentifier = require('../utils/toUrlIdentifier');

exports.createShortenedUrl = async url => {
  const lastUrlCounter = await redis.incr('lastUrl');
  const shortenedUrl = toUrlIdentifier(lastUrlCounter);

  await redis.hset(shortenedUrl, 'originalUrl', url);

  return shortenedUrl;
};
