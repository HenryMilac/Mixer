import express, { json } from "express";
import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import authRouter from './routes/auth.routes.js'
import tasksRouter from './routes/tasks.routes.js'

const app = express();

app.use(morgan('dev'));
app.use(json());
app.use(cookieParser())

app.use('/api', authRouter)
app.use('/api', tasksRouter)


export default app;