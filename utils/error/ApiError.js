class ApiError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    Error.captureStackTrace(this, ApiError);
  }
}

module.exports = ApiError;
