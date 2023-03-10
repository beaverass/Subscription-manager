const {Subscription} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

class SubscriptionController {

    async create(req, res, next){
        const {name, description, pricePerMonth} = req.body
        const token = req.headers.authorization.split(' ')[1]
        const userId = jwt.verify(token, process.env.SECRET_KEY).id

        if(!name || !description || !pricePerMonth || !userId){
            return next(ApiError.badRequest("Введены не все параметры"))
        }
        const sub = await Subscription.findAll({
            where: {
                userId
            }
        });

        let contains = false;

        for (let i = 0; i < sub.length; i++) {
            if(sub[i].name === name){
                contains = true;
            }
        }

        if(contains){
            next(ApiError.badRequest("Уже существует"))
            console.log("not correct if" + '\n\n\n\n\n\n')
        }else{
            let subscription = await Subscription.create({name, description, pricePerMonth, userId})
            return res.json({subscription})
        }



    }

    async getAllByUserId(req, res, next){
        // const {userId} = req.body
        // if(!userId){
        //     return next(ApiError.badRequest("Введены не все параметры"))
        // }
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const subscriptions = await Subscription.findAll({where: {userId: decoded.id}})
        res.json({subscriptions})
    }
}

module.exports = new SubscriptionController()