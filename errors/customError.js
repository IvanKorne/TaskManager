class CustomError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, status) => {
  return new CustomError(msg, status);
};

module.exports = { createCustomError, CustomError };
