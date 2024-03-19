import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email: {
        type: 'String'
    },
    password: {
        type: 'String'
    }
})

export default mongoose.model('user', authSchema)