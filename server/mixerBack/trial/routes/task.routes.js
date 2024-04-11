import { Router } from "express";
import {createTask, deleteTask, getTask, getTasks, updateTask} from '../controllers/task.controllers.js'


const router = Router()
router.post('/task', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)
router.get('/task/:id', getTask)
router.get('/task', getTasks)

export default router