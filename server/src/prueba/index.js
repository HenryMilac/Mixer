import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js";
const app = express();
const port = 3000

app.listen(port, () => console.log(`running on port ${port}`))
app.use(morgan('dev'))
app.use(express.json())
app.use(authRoutes)