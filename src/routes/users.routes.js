const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const usersRouter = Router()

usersRouter.get("/:user_id", UsersController.show)

module.exports = usersRouter
