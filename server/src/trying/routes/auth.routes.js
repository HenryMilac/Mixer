import { Router } from "express";
import { registerGet, registerPost } from "../controllers/auth.controllers.js";

const router = Router()

router.get('/register', registerGet)
router.post('/register', registerPost)


export default router