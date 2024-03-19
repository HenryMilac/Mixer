import user from '../models/auth.model.js'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const {email, password} = req.body
    try{
        const passwordHash = await bcrypt.hash
        const newUser = new user({
            email,
            password
        })
        await newUser.save()
    }catch(error){
        console.log(error)
    }
    res.send('register!')
}