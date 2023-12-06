import { useEffect, useState } from "react"

export default function Z() {

    const [persons, setPersons] = useState([]) 
    const [person, setPerson] = useState({})
    const [name, setName] = useState('')
    const [age, setAge] = useState('')








    const handleSubmit = (e) => {
        e.preventDefault()

        const personObject = {
            name,
            age
        }

        if(person.id){
            personObject.id = person.id
            const personUpdate = persons.map(personState =>
                personState.id === person.id ? personObject : personState
            )
            setPersons(personUpdate)
            setPerson({})
        }else{
            personObject.id = Date.now()
            setPersons([...persons, personObject])
        }

        setName('')
        setAge('')
    }


    const handleDelete = (id) => {
        const personsUpdate = persons.filter(person => person.id !== id)
        setPersons(personsUpdate)
    }










    useEffect(() => {
        setName(person.name)
        setAge(person.age)
    }, [person])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" className="border"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" className="border"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <input type="submit" value={person.id ? 'Edit' : 'Add'} />
            </form>

            {persons.map(person => (
                <div key={person.id} className="flex justify-between">
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                    <div>
                        <button onClick={() => setPerson(person)}>Edit</button>
                        <button onClick={() => handleDelete(person.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}