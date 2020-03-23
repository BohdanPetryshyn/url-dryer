const { isEmpty } = require('lodash');

const redisDb = require('../setup/redisDb');
const toUrlIdentifier = require('../utils/toUrlIdentifier');
const ApiError = require('../utils/error/ApiError');

exports.saveOriginalUrl = async url => {
  const lastUrlCounter = await redisDb.incr('lastUrl');
  const shortenedUrl = toUrlIdentifier(lastUrlCounter);

  await redisDb.hset(shortenedUrl, 'originalUrl', url);

  return shortenedUrl;
};

exports.getShortenedUrlInfo = async id => {
  const shortenedUrlInfo = await redisDb.hgetall(id);

  if (isEmpty(shortenedUrlInfo)) {
    throw new ApiError(404, `Shortened URL with id=${id} doesn't exist`);
  }

  return shortenedUrlInfo;
};
