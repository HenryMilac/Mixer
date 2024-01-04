import { usePersonsStore } from "./store/persons.store"

export default function ZustandFernandoHerrera() {

    const firstName = usePersonsStore(state => state.firstName)
    const lastName = usePersonsStore(state => state.lastName)
    const setFirstName = usePersonsStore(state => state.setFirstName)
    const setLastName = usePersonsStore(state => state.setLastName)

    return (
        <div className="p-5 flex flex-col gap-y-5">
            <div className="flex gap-x-10">
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" className="border border-gray-400"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" className="border border-gray-400"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
            </div>

            <div className="bg-gray-100 p-5">
                <p>{`{`}</p>
                <p>"firstName": "{firstName}",</p>
                <p>"lastName": "{lastName}",</p>
                <p>{`}`}</p>
            </div>
        </div>
    )
}