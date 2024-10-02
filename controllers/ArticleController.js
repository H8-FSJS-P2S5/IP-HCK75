const { Article } = require("../models")
const { Op } = require("sequelize")


class ArticleController {
    static async getAllArticle(req, res, next){
        try {
            const { search, filter, page } = req.query

            const paramsQuery = {}

            //SEARCH

            if(search){
                paramsQuery.where = {
                    title: {
                        [ Op.iLike ]: `%${search}%`
                    }
                }
            }

            if (filter){
                paramsQuery.where = {
                    category: filter
                }
            }

            if( filter && search){
                paramsQuery.where = {
                    title: {
                        [ Op.iLike ]: `%${search}%`
                    },
                    category: filter
                }
            }

            //PAGINATION

            const limit = 10
            let pageNumber = 1

            if (page){
                if(page.size){
                    limit = page.size
                    paramsQuery.limit = limit
                }

                if(page.number){
                    pageNumber = page.number
                    paramsQuery.offset = limit *  (pageNumber - 1)
                }
            } else {
                paramsQuery.limit = limit
                paramsQuery.offset = limit *  (pageNumber - 1)
            }

            const { count, rows } = await Article.findAndCountAll(paramsQuery)

            res.status(200).json({
                page: +pageNumber,
                data: rows,
                totalData: count,
                totalPage: Math.ceil(count/limit),
                dataPerPage: +limit
            })

        } catch (error) {
            console.log(error);
        }
    }

    static async getArticleById(req, res, next) {
    try {
      const articleId = req.params.id;
      let getArticleId = await Article.findByPk(+articleId);
      if (!getArticleId) {
        throw {
          name: "NotFound",
        };
      } else {
        return res.status(200).json(getArticleId);
      }
    } catch (error) {
      next(error);
    }
  }


  static async createArticle(req, res, next) {
    try {
      const article = await Article.create({
        ...req.body,
      });
      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  }

  static async updatePostById(req, res, next) {
    const articleId = req.params.id;
    try {
      const article = await Article.findByPk(articleId);
      if (!article) {
        throw { name: "NotFound" };
      }
      let updated = await article.update(req.body);

      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  }
   static async deleteArticleById(req, res, next) {
    try {
      const articleId = req.params.id;
      const article = await Article.findByPk(+articleId);

      if (!article) {
        throw {
          name: "NotFound",
          message: `Article ID ${articleId} not found`,
        };
      } else {
        await article.destroy();

        res.status(200);
        res.json({ message: `${articleId} success to delete` });
      }
    } catch (error) {
  
      next(error);
    }
  }
}

module.exports = ArticleController