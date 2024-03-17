import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    }
})

export default mongoose.model('auth', authSchema)