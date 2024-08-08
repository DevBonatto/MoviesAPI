const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const notesRouter = Router()

notesRouter.post("/:user_id", NotesController.create)

module.exports = notesRouter
