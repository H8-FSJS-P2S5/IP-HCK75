const { User, Type, Plant } = require("../models");
async function authorization(req, res, next) {
  try {
    if (req.user.role === "Admin") {
      next();
    } else {
     
      const plant = req.params.id;

      const data = await Plant.findByPk(plant);
      if (!data) {
        throw { name: "NotFound" };
      }
    
      next();
    }
  } catch (error) {
    console.log(error,"ini autho");
    
    next(error);
  }
}

module.exports = authorization;
