import express from 'express'
import morgan from 'morgan'
import { connectDB } from './db.js'
const app = express()

app.listen(1000, console.log('Running on port 1000'))
app.use(morgan('dev'))

connectDB()