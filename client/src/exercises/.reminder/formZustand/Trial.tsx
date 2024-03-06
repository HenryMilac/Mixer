import React, { useEffect } from 'react'
import { useNotesStore } from './stores/notes.store'

export default function Trial() {
    const notes = useNotesStore(state => state.notes)
    const setNotes = useNotesStore(state => state.setNotes)
    const note = useNotesStore(state => state.note)
    const setNote = useNotesStore(state => state.setNote)
    const noteInput = useNotesStore(state => state.noteInput)
    const setNoteInput = useNotesStore(state => state.setNoteInput)
    const tagInput = useNotesStore(state => state.tagInput)
    const setTagInput = useNotesStore(state => state.setTagInput)
    const handleSubmit = useNotesStore(state => state.handleSubmit)
    const handleEdit = useNotesStore(state => state.handleEdit)
    const handleDelete = useNotesStore(state => state.handleDelete)

    return (
        <div className='p-3'>

            <form onSubmit={handleSubmit} className='flex flex-col '>
                <input type="text" placeholder='note' className='text-black'
                    value={noteInput}
                    onChange={e => setNoteInput(e.target.value)}
                />
                <input type="text" placeholder='tag' className='text-black'
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                />
                <input type="submit" value={note.id ? 'Edit' : 'Add'} />
            </form>

            <h2>Notes: <hr /></h2>
            <div>
                {notes.map((note) => (
                    <div key={note.id} className='border border-white p-2 my-4'>
                        <p>Note: {note.noteInput}</p>
                        <p>Tag: {note.tagInput}</p>
                        <button onClick={() => handleEdit(note)}>Edit</button>
                        <button onClick={() => handleDelete(note.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}