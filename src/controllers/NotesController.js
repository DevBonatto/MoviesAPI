const knex = require("../database/knex")
class NotesController {
  static async create(req, res) {
    const { title, description, rating, tags } = req.body
    const { user_id } = req.params

    const [ note_id ]  = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    })

    const tagsInsert = tags.map(name => {
      return {
        note_id,
        name,
        user_id
      }
    })
    
    await knex("movie_tags").insert(tagsInsert)

    res.status(200).json()
  }
}

module.exports = NotesController