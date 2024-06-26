import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
        email: {
            type: 'String'
        },
        userName: {
            type: 'String'
        },
        password: {
            type: 'String'
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)