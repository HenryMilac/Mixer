import Task from '../models/task.model.js'

export const createTask = async(req, res) => {
    const {title, description} = req.body
    const newTask = new Task({
        title,
        description
    })
    const taskSaved = await newTask.save()
    res.json(taskSaved)
}
export const updateTask = (req, res) => {
    const taskFound = Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if(!taskFound) return res.status(404).json({message: 'Task not found'})
    res.send(taskFound)
}
export const deleteTask = (req, res) => {
}
export const getTask = (req, res) => {
}
export const getTasks = (req, res) => {
}