import mongoose from "mongoose";

export const connectDB = () => {
    try{
        mongoose.connect('mongodb://localhost:27017/')
    }catch(error){
        console.log(error)
    }
}