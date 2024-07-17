import User from '../models/auth.model.js'
import bcrypt from 'bcryptjs'


export const register = async(req, res) => {
    const {email, userName, password} = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            userName,
            password: passwordHash
        })
        const userSaved = await newUser.save()
        res.json(userSaved)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const login = async(req, res) => {
    try{
        const {email, password} = req.body
        const userFound = await User.findOne({email})
        if (!userFound) return res.status(400).json({message: "User not found"})
        const passwordMatch = await bcrypt.compare(password, userFound.password)
        if(!passwordMatch) return res.status(400).json({message: "Incorrect password"})
    }catch(error){
        res.status(400).json({messagge: error.message})
    }
}
export const logout = (req, res) => {
}
export const profile = (req, res) => {
    res.send('Welcome!')
}