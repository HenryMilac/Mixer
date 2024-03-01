import React, { useEffect } from "react"
import { useNotesStorePersist } from "./store/notes.store"

export default function FormNewEditDeleteZustand() {

  const notes = useNotesStorePersist(state => state.notes)
  const note = useNotesStorePersist(state => state.note)
  const setNote = useNotesStorePersist(state => state.setNote)
  const noteInput = useNotesStorePersist(state => state.noteInput)
  const setNoteInput = useNotesStorePersist(state => state.setNoteInput)
  const categoryInput = useNotesStorePersist(state => state.categoryInput)
  const setCategoryInput = useNotesStorePersist(state => state.setCategoryInput)
  const handleSubmit = useNotesStorePersist(state => state.handleSubmit)
  const handleDelete = useNotesStorePersist(state => state.handleDelete)

  useEffect(() => {
    if(Object.keys(note).length > 0){
      setNoteInput(note.noteInput)
      setCategoryInput(note.categoryInput)
    }
  }, [note])

  return (
    <div className="max-w-2xl mx-auto p-5">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" placeholder="Write your note" className="text-black"
          value={noteInput}
          onChange={e => setNoteInput(e.target.value)}
        />
        <input type="string" placeholder="Write your category" className="text-black"
          value={categoryInput}
          onChange={e => setCategoryInput(e.target.value)}
        />
        <input type="submit" value={note.id ? 'Edit': 'Add'} />
      </form>


      <div>
        <p>Notes List:</p>
        <hr />

        {notes.map((note) => (
          <div key={note.id} className="flex justify-between">
            <div className="flex gap-x-5">
              <p>{note.noteInput}</p>
              <p>{note.categoryInput}</p>
            </div>
            <div>
              <button onClick={() => setNote(note)}>Edit</button>
              <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}