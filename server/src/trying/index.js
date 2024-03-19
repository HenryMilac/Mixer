import express from "express";
import authRoutes from './routes/auth.routes.js'
import { connectDB } from "./db.js";
const app = express()

app.listen(3000)
app.use(express.json())
app.use(authRoutes)
connectDB()