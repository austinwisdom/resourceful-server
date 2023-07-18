const resourcesRouter = require('express').Router()
const resourcesControllers = require('../controllers/resourcesControllers')

resourcesRouter.route("/:category").get(resourcesControllers.getResources)

module.exports = resourcesRouter