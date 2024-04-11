import mongoose, { Schema } from "mongoose";


const taskSchema = new Schema(
    {
        title: {
            type: 'String'
        },
        description: {
            type: 'String'
        },
        user: {
            type: Schema.Types.ObjectId
        },
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Task', taskSchema)