import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";


const router = Router()
router.get('/register', register)
router.get('/login', login)
router.get('/logout', logout)

export default router