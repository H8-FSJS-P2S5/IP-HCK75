const { Op } = require("sequelize");
const { User, Type, Plant } = require("../models");
const { comparePassword } = require("../Helpers/bycripts");
const { errorHandler } = require("../Middlewares/errorhandler");


 


class plantController {
  static async getallPlant(req, res, next) {
    try {
      console.log(req.query);

      const { filter, search, sort, page } = req.query;
      const checkFilter = {
        include: {
          model: Type, 
        },
       
      };
      if (filter) {
        checkFilter.where = {
          TypeId: filter,
        };
      }
      if (search) {
        checkFilter.where = {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        };
      }
      if (sort) {
        const ordering = sort[0] === "-" ? "DESC" : "ASC";
        const orderBy = ordering === "DESC" ? sort.slice(1) : sort;
        checkFilter.order = [[orderBy, ordering]];
      }

      let limit = 10;
      let offset = 1;

      if (page) {
        if (page.size) {
          limit = page.size;
          checkFilter.limit = limit;
        }
        if(page.number){
          offset = page.number
          checkFilter.offset = limit * (offset - 1)
        }
      }


      let data = await Plant.findAll(checkFilter);
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async plantById(req, res, next) {
    try {
      console.log(req.params);
      let data = await Plant.findByPk(req.params.id);

      if (!data) throw { name: "NotFound" };
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  static async postallPlant(req, res, next) {
    try {
      
      let data = await Plant.create(req.body);

      res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }
  static async editPlant(req, res, next) {
    try {
      const { id } = req.params;

      await Plant.update(req.body, {
        where: { id },
      });
      res.status(200).json({
        message: `Plant ${id} has been updated `,
      });
    } catch (error) {
      next(error);
    }
  }

  // static async pathPlant(req, res, next) {
  //   try {
  //     const { id } = req.params;
  //     const imageUrl = req.file;

  //     if (!imageUrl) {
  //       return res.status(400).json({ message: "No file uploaded." });
  //     }
  //     const { mimetype, buffer } = imageUrl;
  //     const img = `data:${mimetype};base64,${buffer.toString("base64")}`;

  //     const data = await cloudinary.uploader.upload(img);
  //     console.log(data.secure_url);
  //     await Plant.update(
  //       { imgUrl: data.secure_url },
  //       {
  //         where: { id },
  //       }
  //     );
  //     // console.log(process.env.CLOUDINARY_API_KEY, process.env.CLOUDINARY_API_SECRET);
  //     res.status(200).json({
  //       message: `Image Plant succes to update`,
  //       imageUrl: data.secure_url,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     next(error);
  //   }
  // }

  static async deletePlant(req, res, next) {
    try {
      const { id } = req.params;
      let data = await Plant.findByPk(id);
      if (!data) throw { name: "NotFound" };
      await Plant.destroy({
        where: { id },
      });
      res.status(200).json({
        message: `Plant ${id} has been deleted `,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = plantController;
