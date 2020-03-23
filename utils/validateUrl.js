const ApiError = require('./error/ApiError');

const URL_PATTERN = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

module.exports = url => {
  if (!URL_PATTERN.test(url)) {
    throw new ApiError(400, 'Invalid url provided.');
  }
};
