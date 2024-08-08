const knex = require("../database/knex")

class UsersController {
  static async create(req, res) {
    const { name, email, password } = req.body
    const { user_id } = req.params

    await knex("users").insert({
      name,
      email,
      password
    })

    res.status(201).json( { user_id, name, email, password } )
  }
}

module.exports = UsersController
