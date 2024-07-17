import mongoose, { Schema } from "mongoose";


const noteSchema = new Schema(
    {
        title: {
            type: 'String'
        },
        description: {
            type: 'String'  
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('Note', noteSchema)