const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const notesRouter = Router()

notesRouter.post("/:user_id", NotesController.create)
notesRouter.get("/:id", NotesController.show)
notesRouter.delete("/:id", NotesController.delete)

module.exports = notesRouter
