const goService = require('../../service/go');

exports.redirect = async (req, res, next) => {
  const { originalUrlId } = req.params;

  const originalUrl = await goService.getOriginalUrl(originalUrlId);

  res.redirect(originalUrl);
};
