import mongoose from 'mongoose'


const authSchema = new mongoose.Schema(
    {
        email: {
            type: 'String',
            unique: true,
            lowercase: true
        },
        userName: {
            type: 'String',
            unique: true
        },
        password: {
            type: 'String',
            unique: true
        }
    },
    {
        timeseries: true
    }
)

export default mongoose.model('User', authSchema)