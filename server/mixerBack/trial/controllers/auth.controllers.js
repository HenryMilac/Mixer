import User from '../models/auth.model.js'
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'

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
        const token = await createAccessToken({id: newUser._id})
        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            userName: userSaved.userName,
            createdAt: userSaved.createdAt
        })
        res.send('register!')
    }catch(error){
        console.log(error)
    }
}
export const login = (req, res) => {
    res.send('login')
}
export const logout = (req, res) => {
    res.send('logout')
}