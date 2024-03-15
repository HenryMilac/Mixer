import users from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAccessToken } from '../../libs/jwt.js'

export const register = async(req, res) => {
    const { name, password } = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new users({ 
            name, 
            password: passwordHash
        })
        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })
        res.cookie('token', token)
        res.json({
            // Aca coloco solo los datos que necesita Front, no es necesario enviarle todo
            id: userSaved._id,
            name: userSaved.name,
            createdAt: userSaved.createdAt
        })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

export const login = (req, res) => res.send('login')