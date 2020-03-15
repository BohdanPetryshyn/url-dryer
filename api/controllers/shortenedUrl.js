const shortenedUrlService = require('../../service/shortenedUrl');

exports.create = async (req, res, next) => {
  const { url } = req.body;

  const shortenedUrl = await shortenedUrlService.createShortenedUrl(url);

  res.status(200).json({
    id: shortenedUrl,
  });
};
