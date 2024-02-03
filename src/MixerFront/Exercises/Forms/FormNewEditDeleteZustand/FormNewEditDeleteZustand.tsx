import { useNotesStore } from "./store/notes.store"

export default function FormNewEditDeleteZustand() {

  const notes = useNotesStore(state => state.notes)
  const note = useNotesStore(state => state.note)
  const setNote = useNotesStore(state => state.setNote)
  const noteInput = useNotesStore(state => state.noteInput)
  const categoryInput = useNotesStore(state => state.categoryInput)
  const setNoteInput = useNotesStore(state => state.setNoteInput)
  const setCategoryInput = useNotesStore(state => state.setCategoryInput)
  const handleSubmit = useNotesStore(state => state.handleSubmit)
  const handleDelete = useNotesStore(state => state.handleDelete)
  

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
        <input type="submit" value='Add' />
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