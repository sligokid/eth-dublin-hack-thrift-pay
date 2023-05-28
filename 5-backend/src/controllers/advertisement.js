const { viewAd, skipAd, viewAdPlatform } = require("../utils/biconomy")

let controller = {}


controller.createAd = async(req,res)=>{

}

controller.viewUserAd = async(req,res,next)=>{
    try {
        const data = await viewAd()

        res.status(200).send({status:'OK', transactionHash: data})
    } catch (error) {
        next(error)
    }
}

controller.skipAd = async(req,res,next) =>{
    try {
        const data = await skipAd()

        res.status(200).send({status:'OK', transactionHash: data})
    } catch (error) {
        next(error)
    }
}

controller.viewAdPlatform = async(req,res,next) => {
    try {
        const data = await viewAdPlatform()

        res.status(200).send({status:'OK', transactionHash: data})
    } catch (error) {
        next(error)
    }
}

module.exports = controller