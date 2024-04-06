import authSchema from '../models/auth.model.js'
import bcrypt from 'bcryptjs'
import User from '../models/auth.model.js'
import { createAccessToken } from '../libs/jwt.js'

export const register = async(req, res) => {
    const {email, userName, password} = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new authSchema({
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
        console.log(error)
    }
}
export const login = async(req, res) => {
    const {email, password} = req.body
    try{
        const userFound = await User.findOne({email})
        if(!userFound) return res.status(400).json({message: 'User not found!'})
        const passwordMatch = await bcrypt.compare(password, userFound.password)
        if(!passwordMatch) return res.status(400).json({message: 'Incorrect password!'})

        const token = await createAccessToken({id: userFound._id})
        res.cookie('token', token)
        res.json({
            userName: userFound.userName
        })
    }catch(error){
        console.log(error)
    }
}
export const logout = (req, res) => {
    res.cookie('token', '', {expires: new Date(0)})
    return res.sendStatus(200)
}
export const profile = (req, res) => {

}