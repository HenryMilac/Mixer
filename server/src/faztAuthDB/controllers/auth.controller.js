import { createAccessToken } from '../libs/jwt.js'
import users from '../models/user.model.js'
import bcrypt from 'bcryptjs'


export const register = async(req, res) => {
    const { email, password } = req.body
    try{
        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = new users({ 
            email, 
            password: passwordHash
        })
        const userSaved = await newUser.save()
        const token = await createAccessToken({ id: userSaved._id })
        res.cookie('token', token);
        // Envía una respuesta JSON al cliente con solo los datos necesarios para la interfaz de usuario (Front). No es necesario enviarle toda la información porque no lo mostrará en la pantalla
        res.json({
            id: userSaved._id,
            email: userSaved.email,
            createdAt: userSaved.createdAt
        })
    } catch(error){
        res.status(500).json({ message: error.message })
    }
}

export const login = (req, res) => res.send('login')