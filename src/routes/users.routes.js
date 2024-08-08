const { Router } = require('express')
const UsersController = require('../controllers/UsersController')

const usersRouter = Router()

usersRouter.post("/:user_id", UsersController.create)

module.exports = usersRouter
