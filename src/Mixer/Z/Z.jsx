import { useState } from "react"

export default function FormNewEditDelete() {

    const [persons, setPersons] = useState([])
    const [person, setPerson] = useState({})
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const person = {
            id: Date.now(),
            name, 
            age
        }

        setPersons([...persons, person])
        setName('')
        setAge('')
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="Name" className="text-black"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="">Age: </label>
                    <input type="number" placeholder="Age" className="text-black"
                        value={age}
                        onChange={(e) => {setAge(e.target.value)}}
                    />
                </div>
                <input type="submit" value="Send" />
            </form>
            <hr />
            {persons.map((person) => (
                <div className="flex justify-between" key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.age}</p>
                    <div className="">
                        <button onClick={() => {setPerson(person)}}>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
