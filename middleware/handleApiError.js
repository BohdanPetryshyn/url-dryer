const ApiError = require('../utils/error/ApiError');

module.exports = (error, req, res, next) => {
  if (error instanceof ApiError) {
    return res.status(error.code).json({ message: error.message });
  }

  next(error);
};
