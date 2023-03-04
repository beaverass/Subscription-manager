const {Subscription} = require('../models/models')
const ApiError = require('../error/ApiError')

class SubscriptionController {
    async create(req, res){
        const {name, description, pricePerMonth, userId} = req.body
        const subscription = await Subscription.create({name, description, pricePerMonth, userId})
        return res.json(subscription)
    }

    async getAllByUserId(req, res){

    }
}

module.exports = new SubscriptionController()