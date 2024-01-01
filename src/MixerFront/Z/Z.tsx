import { useNotesStore } from "./store/notes.store"

export default function Z() {

    const notes = useNotesStore(state => state.notes)

    return (
        <div className="p-5 flex flex-col gap-y-5 bg-gray-900 h-full text-white">
            <div>
                <p>Notes:</p>
                <hr />
            </div>

            <form>
                <label htmlFor="">Nota:</label>
                <input type="text" className="border border-gray-400"
                />
                <input type="submit" value="Add" />
            </form>

            <div>
                {notes.map(note => (
                    <div key={note.id} className="flex justify-between">
                        <p>{note.note}</p>
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