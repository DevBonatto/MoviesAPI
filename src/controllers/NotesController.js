class NotesController {
  static async create(req, res) {
    const { title, description, rating } = req.body
    const { user_id } = req.params

    res.status(200).json({ title, description, rating, user_id })
  }
}

module.exports = NotesController