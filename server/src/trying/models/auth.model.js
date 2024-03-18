import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name: {
        type: 'String'
    },
    password: {
        type: 'String'
    }
})

export default mongoose.model('auth', authSchema)