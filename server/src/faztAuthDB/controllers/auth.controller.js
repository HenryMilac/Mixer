import users from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createA ccessToken } from '../../libs/jwt.js'

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
        res.cookie('token', token);
        // Envía una respuesta JSON al cliente con solo los datos necesarios para la interfaz de usuario (Front). No es necesario enviarle toda la información porque no lo mostrará en la pantalla
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            createdAt: userSaved.createdAt
        })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

export const login = (req, res) => res.send('login')