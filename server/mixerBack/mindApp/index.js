import express, { json } from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'
import authRoutes from '../mindApp/routes/auth.routes.js'
import noteRoutes from '../mindApp/routes/note.routes.js'
import reminderRoutes from '../mindApp/routes/reminder.routes.js'

const app = express()
app.listen(3000)
app.use(morgan('dev'))
app.use(json())
app.use('/api', authRoutes)
app.use('/api', noteRoutes)
app.use('/api', reminderRoutes)
connectDB()