import app from "./app.js";
import authRouter from './routes/auth.routes.js'


app.listen(3000)
app.use('/api', authRouter)