import express, { json } from 'express'
import authRouter from './routes/auth.routes.js'
import morgan from 'morgan'

const app = express()
app.use(json())
app.use(morgan('dev'))
app.use('/api', authRouter)


export default app