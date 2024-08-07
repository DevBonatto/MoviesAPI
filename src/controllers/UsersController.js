class UsersController {
  static async show(req, res) {
    const { user_id } = req.params

    res.status(200).json( user_id )
  }
}

module.exports = UsersController
