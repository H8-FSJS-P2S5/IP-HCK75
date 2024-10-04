const { Axios, default: axios } = require("axios");

class ApiController{
    static async weather(req,res,next){
        try {
            
            let {q}= req.query
            const {data} = await axios({
                url: `http://api.weatherapi.com/v1/current.json?key=${process.env.APICUACA}&q=${q}`,
                method: "get"
            })
            console.log(data);
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            
        }
    }
}

module.exports = ApiController