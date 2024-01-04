import { useNotesStore } from "./store/notes.store"

export default function FormAddEditDeleteZustand() {
    
    const notes = useNotesStore((state) => state.notes)    

    return (
        <div className="p-5 flex flex-col gap-y-5 dark:bg-black dark:text-white h-full">

            <form className="border border-gray-300 p-3 flex flex-col gap-y-3">
                <div>
                    <h1>Formulario:</h1>
                    <hr />
                </div>
                <div className="flex">
                    <div className="">
                        <label htmlFor="">Note:</label>
                        <input type="text" className="border border-gray-300 text-gray-500"/>
                    </div>
                    <div>
                        <label htmlFor="">Category:</label>
                        <input type="text" className="border border-gray-300 text-gray-500"/>
                    </div>
                </div>
                <input type="submit" value="Add Note" className="border border-gray-300 px-4"/>
            </form>

            <div>
                <p>Notes:</p>


                <div className="flex flex-col gap-y-3">
                    {notes.map(note => (
                        <div key={note.id} className="flex justify-between border border-gray-200 p-2">
                            <p>{note.note}</p>
                            <div>
                                <p>{note.category}</p>
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}