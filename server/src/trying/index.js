import { connectDB } from "../faztAuthDB/db.js";
import authRouter from './routes/auth.routes.js'
import app from './app.js';


app.listen(3000)
app.use('/api/auth', authRouter)
connectDB()