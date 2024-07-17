import { Router } from "express";
import {createNote, getTask, updateNote} from '../controllers/note.controllers.js'


const router = Router()
router.post('/note', createNote)
router.put('/note/:id', updateNote)
router.get('/note/:id', getTask)

export default router