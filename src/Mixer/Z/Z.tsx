import { notes } from "./store/store"

export default function Z() {

    const {note, categorie} = notes(state => ({
        note: state.note,
        categorie: state.categorie
    }))
    const {addNote} = notes()

    return (
        <div className="p-5">
            <p>Notes:</p>

            <div className="grid grid-cols-3 gap-5">
                <div className="border-2 p-2 border-gray-400 rounded-md">
                    <p>{note}</p>
                    <p>{categorie}</p>
                </div>
                <div className="border-2 p-2 border-gray-400 rounded-md">
                    <p>{note}</p>
                    <p>{categorie}</p>
                </div>
            </div>



            <button onClick={() => addNote()} className="absolute bottom-10 right-10">Add Note</button>
        </div>
    )
}