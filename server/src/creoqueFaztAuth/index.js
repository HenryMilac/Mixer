import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import { connectDB } from './db.js'

connectDB()

const app = express()
app.listen(1000, console.log('Running on port 1000'))
app.use(morgan('dev'))
app.use(express.json())
app.use(authRoutes)