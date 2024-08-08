const knex = require("../database/knex")
const AppError = require("../utils/appError")
class UsersController {
  static async create(req, res) {
    const { name, email, password } = req.body

    await knex("users").insert({
      name,
      email,
      password
    })

    res.status(201).json( { name, email, password } )
  }
}

module.exports = UsersController
