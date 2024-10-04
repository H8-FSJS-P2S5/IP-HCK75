const { User } = require("../models");
const { signToken, verifyToken } = require("../Helpers/jwt");

async function authentication(req, res, next) {
  try {
    const bearerToken = req.headers.authorization;
    console.log("Bearer Token:", bearerToken);
    if (!bearerToken) {
      throw { name: "Invalid Token" };
    }

    const [bearer, token] = bearerToken.split(" ");

    if (!bearer || !token || bearer !== "Bearer")
      throw { name: "Invalid Token" };
    let payload = verifyToken(token);
    const user = await User.findByPk(payload.id);

    if (!user) {
      throw { name: "Invalid Token" };
    }
    req.user = {
      id: user.id,
    };
    next();
  } catch (error) {
    console.log(error, "ini kelc");

    next(error);
  }
}

module.exports = authentication;
