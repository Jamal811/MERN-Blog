// create this middleware that if we have any error but want to show erros if someone does an wrong input etc

export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
