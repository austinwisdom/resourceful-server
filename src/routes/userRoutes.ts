const router = require('express').Router()
const usersControllers = require('../controllers/usersControllers')

router.route("/")
.get(usersControllers.getUser)

router.route("/signup")
.post(usersControllers.signUp)

router.route("/signin")
.post(usersControllers.signIn)

module.exports = router