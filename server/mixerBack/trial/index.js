import express, { json } from 'express'
import morgan from 'morgan'
import { connectionDB } from './db.js'
import authRoutes from './routes/auth.routes.js'
import cookieParser from 'cookie-parser'

const app = express()
app.listen(3000)
app.use(json())
app.use(morgan('dev'))
app.use(cookieParser())
connectionDB()
app.use('/api', authRoutes)