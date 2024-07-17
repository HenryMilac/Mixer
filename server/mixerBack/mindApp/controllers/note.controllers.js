import Note from '../models/note.model.js'


export const createNote = async(req, res) => {
    const {title, description} = req.body
    try{
        const newNote = new Note({
            title,
            description
        })
        const noteSaved = await newNote.save()
        res.json(noteSaved)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
export const updateNote = async(req, res) => {
    const noteFound = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!noteFound) return res.status(400).json({message: "Note not found"})
    res.json(noteFound)
}
export const getTask = async(req, res) => {
    const taskFound = await Note.findById(req.params.id).populate('user')
    if(!taskFound) return res.status(400).json({message: "Task not found"})
    res.json(taskFound)
}