import express, { json } from 'express'
import morgan from 'morgan'
import authRouter from './routes/auth.routes.js'
import connectDB from './db.js'
import cookieParser from 'cookie-parser'


const app = express()
app.listen(3000)
app.use(morgan('dev'))
app.use(json())
app.use(cookieParser())
app.use('/api', authRouter)
connectDB()