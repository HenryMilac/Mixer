import { useEffect, useState } from "react"

export default function FormNewEditDelete() {

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
            const personUpdate = persons.map(
                personState => personState.id === person.id ? personObject : personState
            )
            setPersons(personUpdate)
            setPerson({})
        }else {
            personObject.id = Date.now()
            setPersons([...persons, personObject])
        }
      
        setName('')
        setAge('')
    }

    useEffect(() => {
        if(Object.keys(person).length > 0){
            setName(person.name)
            setAge(person.age)
        }
    }, [person])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="Name" className="border"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div>
                    <label htmlFor="">Age: </label>
                    <input type="number" placeholder="Age" className="border"
                        value={age}
                        onChange={(e) => {setAge(e.target.value)}}
                    />
                </div>
                <input type="submit" value={person.id ? 'Edit': 'Send'} />
            </form>
            {persons.map((person) => (
                <div className="flex justify-between" key={person.id}>
                    <p>{person.name}</p>
                    <p>{person.age}</p>
                    <div className="">
                        <button onClick={() => setPerson(person)}>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
