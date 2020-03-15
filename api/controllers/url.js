const redis = require('../../data/redis');
const toUrlIdentifier = require('../../utils/toUrlIdentifier');

exports.createUrl = async (req, res, next) => {
  const { url } = req.body;

  const lastUrlCounter = await redis.incr('lastUrl');
  const shortenedUrl = toUrlIdentifier(lastUrlCounter);

  await redis.hset(shortenedUrl, 'originalUrl', url);

  res.status(200).json({
    id: shortenedUrl,
  });
};
