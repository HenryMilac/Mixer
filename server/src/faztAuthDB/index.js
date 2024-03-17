import authRoutes from './routes/auth.routes.js'
import { connectDB } from './db.js'
import app from './app.js'


app.listen(1000, console.log('Running on port 1000'))
app.use('/api/auth', authRoutes)
connectDB()