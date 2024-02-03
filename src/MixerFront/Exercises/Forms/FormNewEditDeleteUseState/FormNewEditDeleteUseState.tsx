import { useEffect, useRef, useState } from "react"

interface Person {
    id: number;
    name: string;
    age: number;
}

export default function FormNewEditDeleteUseState() {

    const inputRef = useRef<HTMLInputElement>(null)

    const [persons, setPersons] = useState<Person[]>([])
    const [person, setPerson] = useState<Person>({ id: 0, name: '', age: 0 })
    const [name, setName] = useState<string>('')
    const [age, setAge] = useState<number>(0)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const personObject: Person = {
            id: person.id,
            name,
            age
        }

        if(person.id){
            personObject.id = person.id
            const personUpdate = persons.map(personState =>
                personState.id === person.id ? personObject : personState
            )
            setPersons(personUpdate)
            setPerson({ id: 0, name: '', age: 0 })
        }else {
            personObject.id = Date.now()
            setPersons([...persons, personObject])
        }

        setName('')
        setAge(0)

        if(inputRef.current){
            inputRef.current.focus()
        }
    }

    const handleDelete = (id: number) => {
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
        <div className="max-w-2xl mx-auto p-5 flex flex-col gap-y-5">
            <form onSubmit={handleSubmit} className="flex flex-col"> 
                <h1 className="mb-2">Form:<hr/></h1>
                <input type="text" placeholder="Name" className="text-black"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    ref={inputRef}
                />
                <input type="number" placeholder="Age" className="text-black"
                    value={age}
                    onChange={(e) => {setAge(Number(e.target.value))}}
                />
                
                <input type="submit" value={person.id ? 'Edit': 'Send'} className="border py-1 px-5 cursor-pointer"/>
            </form>
            
            <div>
                <h1>Result:<hr/></h1>
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
