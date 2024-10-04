

const { Type } = require("../models");


class typeController {
  static async getType(req, res, next) {
    try {
      let data = await Type.findAll();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async postType(req, res,next) {
    try {
      // console.log(req.body);

      let data = await Type.create(req.body);
      res.status(201).json(data);
      // res.status(201).json({message: "Data Created, Love You"});
    } catch (error) {
      next(error)
    }
  }

  static async editType(req, res,next) {
    try {
      const { id } = req.params;
      let data = await Type.findByPk(id);
      if (!data) throw { name: "NotFound" };
      await Type.update(req.body, {
        where: { id },
      });
      res.status(200).json({ 
        message: `Type ${id} has been updated `,
      });
    } catch (error) {
     next(error)
    }
  }

  static async delete(req, res,next){
    try {
      const { id } = req.params;
      let data = await Type.findByPk(id);
      if (!data) throw { name: "NotFound" };
      await Type.destroy({
        where: { id },
      });
      res.status(200).json({
        message: `Type ${id} has been deleted `,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = typeController;
