import { useEffect, useRef, useState } from "react"

interface Person {
  id: number;
  name: string;
  age: string;
}

export default function Trial() {

  const inputRef = useRef<HTMLInputElement>(null)

  const [persons, setPersons] = useState<Person[]>([])
  const [person, setPerson] = useState<Person>({id: 0, name: '', age: ''})
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const personObject: Person = {
      id: Date.now(),
      name,
      age
    }
    setPersons([...persons, personObject])
    setName('')
    setAge('')
    setPerson({id: 0, name: '', age: ''})
    if(inputRef.current){
      inputRef.current.focus()
    }
  }

  useEffect(() => {
    setName(person.name)
    setAge(person.age)
  }, [person])

  const handleDelete = (id: number) => {
    const confirmDelete = confirm('Seguro que quiere eliminar?')
    if(confirmDelete){
      const personsUpdate = persons.filter(person => person.id !== id)
      setPersons(personsUpdate)
    }
  }





  return (
    <div className="p-5">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1>Form:<hr className="mb-2"/></h1>
        <input type="text" placeholder="Write the name" className="text-black"
          value={name}
          onChange={e => setName(e.target.value)}
          ref={inputRef}
        />
        <input type="text" placeholder="Write the age" className="text-black"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <input type="submit" value={person.id ? 'Edit' : 'Add'}/>
      </form>      

      <div>
        <h1>Persons:<hr/></h1>
        
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
    </div>
)
}