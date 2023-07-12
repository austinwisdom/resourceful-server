const router = require('express').Router()
const usersControllers = require('../controllers/usersControllers')

router.route("/")
.get(usersControllers.getUsers)

router.route("/signup")
.post(usersControllers.signUp)

router.route("/login")
.post(usersControllers.signIn)
.get(usersControllers.authUser)

router.route("/logout")
.get(usersControllers.logOutUser)

module.exports = router