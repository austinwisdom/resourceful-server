const router = require('express').Router()
const usersControllers = require('../controllers/usersControllers')

router.route("/")
.get(usersControllers.getUsers)

router.route("/signup")
.post(usersControllers.signUp)

router.route("/login")
.post(usersControllers.signIn)
.get(usersControllers.authUser)

module.exports = router