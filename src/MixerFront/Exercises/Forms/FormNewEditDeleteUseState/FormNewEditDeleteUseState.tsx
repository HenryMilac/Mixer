import { useEffect, useState } from "react"

export default function FormNewEditDeleteUseState() {

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
        }else {
            personObject.id = Date.now()
            setPersons([...persons, personObject])
        }

        setName('')
        setAge('')
    }

    const handleDelete = id => {
        const confirmDelete = confirm('Seguro que quiere eliminar?')
        if(confirmDelete){
            const personsUpdate = persons.filter(person => person.id !== id)
            setPersons(personsUpdate)
        }
    }

    useEffect(() => {
        if(Object.keys(person).length > 0){
            setName(person.name)
            setAge(person.age)
        }
    }, [person])

    return (
        <div className="max-w-2xl mx-auto py-10 flex flex-col gap-y-10">
            <form onSubmit={handleSubmit} className="border border-white p-3 flex flex-col gap-y-5">
                <h1 className="text-2xl border-b border-white">Form:</h1>
                <div className="flex flex-col">
                    <label htmlFor="">Name: </label>
                    <input type="text" placeholder="Name" className="border text-black"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Age: </label>
                    <input type="number" placeholder="Age" className="border text-black"
                        value={age}
                        onChange={(e) => {setAge(e.target.value)}}
                    />
                </div>
                <input type="submit" value={person.id ? 'Edit': 'Send'} className="border py-1 px-5 cursor-pointer"/>
            </form>
            
            <div className="flex flex-col gap-y-5">
                <h1 className="text-2xl border-b border-white">Result:</h1>
                {persons.map((person) => (
                    <div className="flex justify-between" key={person.id}>
                        <p>{person.name}</p>
                        <p>{person.age}</p>
                        <div className="">
                            <button onClick={() => setPerson(person)} className="mr-5">Edit</button>
                            <button onClick={() => handleDelete(person.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
