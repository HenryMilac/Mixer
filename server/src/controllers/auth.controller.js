import users from '../models/user.model.js'

export const register = async(req, res) => {
    const { name, password } = req.body
    try{
        const newUser = new users({ 
            name, 
            password 
        })
        await newUser.save()
        res.send("Registrado")
    } catch(error){
        console.log(error)
    }
}

export const login = (req, res) => res.send('login')