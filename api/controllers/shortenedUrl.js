const shortenedUrlService = require('../../service/shortenedUrl');
const getShortenedUrl = require('../../utils/getShortenedUrl');

exports.create = async (req, res, next) => {
  const { url } = req.body;

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
};
