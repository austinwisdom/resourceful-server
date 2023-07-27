const resourcesRouter = require('express').Router()
const resourcesControllers = require('../controllers/resourcesControllers')
const usersMiddleware = require('../controllers/usersControllers')

resourcesRouter.route("/:category").get(usersMiddleware.authUser, resourcesControllers.getResources)

module.exports = resourcesRouter