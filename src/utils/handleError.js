class HandleError extends Error {
  constructor(statusCode, message) {
    super();

    this.statusCode = statusCode;
    this.message = message;
    this.name = 'BadRequestError';
  }
}

module.exports = HandleError;
