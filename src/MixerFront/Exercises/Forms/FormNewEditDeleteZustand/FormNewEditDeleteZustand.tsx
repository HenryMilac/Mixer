import { useNotesStore } from "./store/notes.store"

export default function FormNewEditDeleteZustand() {

  const notes = useNotesStore(state => state.notes)
  const note = useNotesStore(state => state.noteInput)
  const category = useNotesStore(state => state.categoryInput)
  const setNote = useNotesStore(state => state.setNoteInput)
  const setCategory = useNotesStore(state => state.setCategoryInput)
  const handleSubmit = useNotesStore(state => state.handleSubmit)
  

  return (
    <div className="max-w-2xl mx-auto">


      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" placeholder="Write your note" className="text-black"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
        <input type="string" placeholder="Write your category" className="text-black"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />
        <input type="submit" value="Add" />
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
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}