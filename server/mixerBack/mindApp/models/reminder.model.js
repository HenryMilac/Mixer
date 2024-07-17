import mongoose, { Schema } from "mongoose";


const reminderSchema = new Schema(
    {
        title: {
            type: 'String'
        },
        description: {
            type: 'String'  
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Note', reminderSchema)