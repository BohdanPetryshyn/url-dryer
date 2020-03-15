const RedisDb = require('ioredis');

const log = require('../utils/log');

const HOST = process.env.REDIS_HOST || '127.0.0.1';
const PORT = process.env.REDIS_PORT || 6379;

const redis = new RedisDb(PORT, HOST);

redis.setnx('lastUrl', 0);

redis.on('ready', () => {
  log(`Connected to Redis at ${HOST}:${PORT}.`.cyan.underline);
});

module.exports = redis;
