const router = require('express').Router()
const resourcesControllers = require('../controllers/resourcesControllers')

router.route("/:category/:subcategory").get(resourcesControllers.getResources)

module.exports = router