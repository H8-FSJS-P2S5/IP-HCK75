const ApiController = require("../Controllers/apiController");

const Controller = require("../Controllers/Controllers");
const plantController = require("../Controllers/plantController");
const authentication = require("../Middlewares/authentication");
const errorHandler = require("../Middlewares/errorhandler");

const router = require("express").Router();
const gemini=require('../Helpers/gemini')



router.post("/register",Controller.register);
router.post("/login",Controller.login);
router.post("/auth/google",Controller.googleLogin)
router.get("/api",ApiController.weather)
router.post("/gemini",async(req,res,next)=>{
    try {
        const {location}= req.body
        let ai =await gemini(location)
        res.status(200).json(ai)
    } catch (error) {
        console.log(error);
        next(error)
        
    }
})
router.use(authentication)
router.use('/plants', require('./plant'))
router.use('/types', require('./type'))
router.use(errorHandler)
module.exports = router