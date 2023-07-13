const router = require('express').Router()
const usersControllers = require('../controllers/usersControllers')

router.route("/")
.get(usersControllers.authUser, usersControllers.getUser)

router.route("/signup")
.post(usersControllers.signUp)

router.route("/login")
.post(usersControllers.signIn)
.get(usersControllers.authUser)

router.route("/logout")
.get(usersControllers.authUser, usersControllers.logOutUser)

module.exports = router