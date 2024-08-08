const knex = require("../database/knex")
const AppError = require("../utils/appError")
const { hash } = require("bcryptjs")
class UsersController {
  static async create(req, res) {
    const { name, email, password } = req.body

    const hashedPassword = await hash(password, 8)
    
    const thisEmailAlreadyExists = await knex("users")
      .select("*")
      .where({ email })
      .first()

    if(thisEmailAlreadyExists) {
      throw new AppError("Esse email já está cadastrado no sistema!")
    }
      
    await knex("users").insert({
      name,
      email,
      password: hashedPassword
    })

    res.status(201).json( { name, email, password } )
  }

  static async update(req, res) {
    const { name, email, password, old_password } = req.body
    const { id } = req.params

    res.status(200).json({ name, email, password, old_password, id })
  }
}

module.exports = UsersController
