import { usePersonsStore } from "./store/persons.store"

export default function ZustandFernandoHerrera() {

    const fullName = usePersonsStore(state => state.fullName)
    const setFullName = usePersonsStore(state => state.setFullName)

    return (
        <div className="p-5 flex flex-col gap-y-5">
            <div>
                <label htmlFor="">First Name:</label>
                <input type="text"
                    value={fullName} className="text-black"
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            <div className="border border-white p-3">
                <p>Full Name: {fullName}</p>
            </div>
        </div>
    )
}
