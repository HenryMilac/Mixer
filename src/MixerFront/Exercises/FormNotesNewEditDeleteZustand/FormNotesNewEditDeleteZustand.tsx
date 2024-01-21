import { useNotesStore } from "./store/notes.store"

export default function FormNotesNewEditDeleteZustand() {

  const notes = useNotesStore(state => state.notes)
  const note = useNotesStore(state => state.note)
  const category = useNotesStore(state => state.category)
  const setNote = useNotesStore(state => state.setNote)
  const setCategory = useNotesStore(state => state.setCategory)
  const handleSubmit = useNotesStore(state => state.handleSubmit)
  

  return (
    <div>


      <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Note</label>
            <input type="text" placeholder="Write your note" className="text-black"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <div>
        <div>
            <label htmlFor="">Category</label>
            <input type="string" placeholder="Write your category" className="text-black"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Add" />
      </form>


      <div>
        <p>Notes List:</p>
        <hr />

        {notes.map((note) => (
          <div key={note.id} className="flex justify-between">
            <div className="flex gap-x-5">
              <p>{note.note}</p>
              <p>{note.category}</p>
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