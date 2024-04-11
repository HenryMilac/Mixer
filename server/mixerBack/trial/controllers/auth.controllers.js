import { createAccessToken } from '../libs/jwt.js'
import User from '../models/auth.model.js'
import bcrypt from 'bcryptjs'


export const register = async(req, res) => {
    try{
        const {email, userName, password} = req.body
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new User({
            email,
            userName,
            password: passwordHash
        })
        const userSaved = await newUser.save()

        const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token)
        res.json({
            userName: userSaved.userName
        })
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const login = async(req, res) => {
    try{
        const {email, password} = req.body
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(401).json('User not found')
        const passwordMatch = await bcrypt.compare(password, userFound.password)
        if(!passwordMatch) return res.status(401).json('Incorrect Password')

        const token = await createAccessToken({id: userFound._id})
        res.cookie('token', token)
        res.json({
            userName: userFound.userName
        })
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const logout = (req, res) => {
    res.cookie('token', '', {expires: new Date(0)})
    res.sendStatus(200)
}
export const profile = (req, res) => {
    res.send('profile')
}