
import { connectDB } from './db.js'
import app from './app.js'

app.listen(3000, console.log('Running on port 3000'))
connectDB()