import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: 'String',
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.model('users', userSchema)