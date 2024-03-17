
import authRouter from './routes/auth.routes.js'
import {connectDB} from './db.js'
import app from './app.js'

app.listen(3000, console.log(`running on ${3000}`))
app.use('/api/auth', authRouter)

connectDB()