import { Router } from "express";
import { login, logout, profile, register } from "../controllers/auth.controllers.js";


const router = Router()
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.post('/profile', profile)


export default router