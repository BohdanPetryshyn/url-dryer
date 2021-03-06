const shortenedUrlService = require('../../service/shortenedUrl');
const getShortenedUrl = require('../../utils/getShortenedUrl');
const validateUrl = require('../../utils/validateUrl');
const passErrors = require('../../utils/error/passErrors');

exports.create = passErrors(async (req, res, next) => {
  const { url } = req.body;

  validateUrl(url);

  const originalUrlId = await shortenedUrlService.saveOriginalUrl(url);

  const shortenedUrl = getShortenedUrl({
    protocol: req.protocol,
    host: req.get('host'),
    originalUrlId,
  });

  res.status(200).json({
    id: originalUrlId,
    shortenedUrl,
  });
});

exports.getInfo = passErrors(async (req, res, next) => {
  const { id } = req.params;

  const shortenedUrlInfo = await shortenedUrlService.getShortenedUrlInfo(id);

  res.status(200).json(shortenedUrlInfo);
});
