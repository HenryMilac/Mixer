const login = (req, res) => {
    const {email, password} = req.body
    console.log(email, password)

    res.send('login...')
}
const register = (req, res) => res.send('Register Page')

export {
    login, 
    register
}