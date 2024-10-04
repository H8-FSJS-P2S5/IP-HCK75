function errorHandler(error, req, res, next) {

  console.log(error, "<<<< ini error");

  let status = error.status || 500;
  let message = error.message || "Internal Server Error";

  switch (error.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      status = 400;
      message = error.errors[0].message;
      break;
    case "Email is required":
    case "Password is required":
      status = 400;
      message = error.name;
      break;
    case "invalid email/password":
      status = 401;
      message = error.name;
      break;
    case "Invalid Token":
    case "JsonWebTokenError":
      status = 401;
      message = "Invalid Token";
      break;
    case "Forbidden":
      status = 403;
      message = "Unauthorization Forbidden";
      break;
    case "NotFound":
      status = 404;
      message = "Data Not Found";
      break;
  }
  res.status(status).json({ message: message });
}
module.exports = errorHandler;
