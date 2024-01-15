import { useRef, useState } from "react"
import functHandleSubmit from "./helpers/functHandleSubmit"

export default function Z() {
    const [persons, setPersons] = useState([])
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const inputDefault = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const personObject = {
                name,
                age
        }
        setPersons([...persons, personObject])
        setName('')
        setAge('')
        inputDefault.current.focus()
    }
    


    return (
        <div>
            <p>Formulario:</p>
            <hr/>
            <form>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" className="text-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        ref={inputDefault}
                    />
                </div>
                <div>
                    <label htmlFor="">Age:</label>
                    <input type="number" className="text-black"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <input onClick={handleSubmit} type="submit" value="Send"/>
            </form>

            <div>
                <h1>Result:</h1>

                {persons.map((person, i) => (
                    <div key={i} className="flex justify-between">
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                        <div>
                            <button className="mr-3">Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}