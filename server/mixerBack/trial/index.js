import express, { json } from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'
import authRouter from './routes/auth.routes.js'
import taskRouter from './routes/task.routes.js'

const app = express()
app.listen(3000)
app.use(json())
app.use(morgan('dev'))
app.use('/api', authRouter)
app.use('/api', taskRouter)
connectDB()