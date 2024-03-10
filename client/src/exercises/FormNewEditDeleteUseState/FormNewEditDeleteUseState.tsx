import React, { useEffect, useRef, useState } from "react"

interface Person {
    id: number;
    name: string;
    lastName: string;
}

export default function FormNewEditDeleteUseState() {

    const inputRef = useRef<HTMLInputElement>(null)

    const [persons, setPersons] = useState<Person[]>([])
    const [person, setPerson] = useState<Partial<Person>>({})
    const [name, setName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newPerson = {
            name: name,
            lastName: lastName
        }
        if(person.id){
            const personsEditing = persons.map(personEdit => {
                if(personEdit.id === person.id){
                    return {
                        ...personEdit,
                        name: name,
                        lastName: lastName
                    }
                }
                return personEdit
            })
            setPersons(personsEditing)
        }else {
            const completeNewPerson: Person = {
                ...newPerson,
                id: Date.now(),
            } as Person;
            setPersons([...persons, completeNewPerson]);
        }
        setPerson({})
        setName('')
        setLastName('')
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleDelete = (id: number) => {
        const personsFiltered = persons.filter(person => person.id !== id)
        setPersons(personsFiltered)
    }

    useEffect(() => {
        if (person.id !== undefined) {
            setName(person.name || '');
            setLastName(person.lastName || '');
        }
    }, [person])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" className="text-black"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    ref={inputRef}
                />
                <input type="text" placeholder="Last Name" className="text-black"
                    value={lastName}
                    onChange={(e) => { setLastName(e.target.value) }}
                />

                <input type="submit" value={person.id ? 'Edit' : 'Add'}/>
            </form>

            <div>
                <h1>Persons:<hr /></h1>
                {persons.map((person) => (
                    <div className="flex justify-between" key={person.id}>
                        <p>{person.name}</p>
                        <p>{person.lastName}</p>
                        <div className="">
                            <button onClick={() => setPerson(person)}>Edit</button>
                            <button onClick={() => handleDelete(person.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
