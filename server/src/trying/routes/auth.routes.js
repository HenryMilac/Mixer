import { Router } from "express";
import { register } from "../controllers/auth.controllers.js";

const routes = Router()

routes.post('/register', register)

export default routes