const {Subscription} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Op } = require("sequelize");

class SubscriptionController {

    async create(req, res, next){
        const {name, description, pricePerMonth, userId} = req.body
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
        }else{
            let subscription = await Subscription.create({name, description, pricePerMonth, userId})
            return res.json({subscription})
        }

        //todo create fornt and try this app

    }

    async getAllByUserId(req, res, next){
        const {userId} = req.body
        if(!userId){
            return next(ApiError.badRequest("Введены не все параметры"))
        }

        const subscriptions = await Subscription.findAll({where: {userId}})
        res.json({subscriptions})
    }
}

module.exports = new SubscriptionController()