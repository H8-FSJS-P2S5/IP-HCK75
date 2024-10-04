const jwt = require("jsonwebtoken")

let secretKey = process.env.SECRET_KEY;

let signToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

let verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  signToken,
  verifyToken,
};
