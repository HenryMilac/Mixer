import { Router } from "express";
import {createReminder} from '../controllers/reminder.controllers.js'


const router = Router()
router.post('/reminder', createReminder)

export default router