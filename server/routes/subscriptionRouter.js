const Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')

router.post('/', subscriptionController.create)
router.get('/', subscriptionController.getAllByUserId)


module.exports = router