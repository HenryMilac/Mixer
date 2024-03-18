
const registerGet = (req, res) => res.send('traer datos del usuario')
const registerPost = (req, res) => res.send(req.body)

export {
    registerGet,
    registerPost
}