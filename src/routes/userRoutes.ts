const userRouter = require('express').Router()
const usersControllers = require('../controllers/usersControllers')

userRouter.route("/")
.get(usersControllers.authUser, usersControllers.getUser)

userRouter.route("/signup")
.post(usersControllers.signUp)

userRouter.route("/login")
.post(usersControllers.signIn)
.get(usersControllers.authUser)

userRouter.route("/logout")
.get(usersControllers.authUser, usersControllers.logOutUser)

module.exports = userRouter