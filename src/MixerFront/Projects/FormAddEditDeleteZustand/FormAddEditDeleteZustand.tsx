export default function FormAddEditDeleteZustand() {
    return (
        <div className="p-5 flex flex-col gap-y-5">
            <div>
                <h1>Formulario:</h1>
                <hr />
            </div>

            <form className="border border-gray-300 p-3">
                <div>
                    <label htmlFor="">Note:</label>
                    <input type="text" className="border border-gray-300"/>
                </div>
                <div>
                    <label htmlFor="">Category:</label>
                    <input type="text" className="border border-gray-300"/>
                </div>
                <input type="submit" value="Add Note" className="border border-gray-300 px-4"/>
            </form>

            <div>
                <p>Notes:</p>


                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between border border-gray-200 p-2">
                        <p>This a note on proving, this a note on proving</p>
                        <div>
                            <p>Category</p>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}