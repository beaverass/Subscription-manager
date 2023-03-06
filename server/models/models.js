const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true},
    password:{type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Subscription = sequelize.define('subscription', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, require: true},
    description: {type: DataTypes.STRING, require: true},
    pricePerMonth: {type: DataTypes.DOUBLE, require: true}
})


User.hasMany(Subscription);
Subscription.belongsTo(User);

module.exports = {
    User,
    Subscription
}
