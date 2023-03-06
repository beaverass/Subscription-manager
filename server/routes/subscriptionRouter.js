const Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')
const authMiddleware = require("../middleware/authMiddleware");

router.post('/', authMiddleware, subscriptionController.create)
router.get('/', authMiddleware, subscriptionController.getAllByUserId)


module.exports = router