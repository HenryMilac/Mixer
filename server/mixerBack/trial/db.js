import mongoose from 'mongoose'

export const connectionDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/')
    }catch(error){
        console.log(error)
    }
}