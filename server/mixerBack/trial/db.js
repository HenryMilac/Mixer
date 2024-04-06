import mongoose from 'mongoose'

const connectDB = (req, res) => {
    try{
        mongoose.connect('mongodb://localhost:27017/')
    }catch(error){
        return res.status(500), console.log(error)
    }
}


export default connectDB