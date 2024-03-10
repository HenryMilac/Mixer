import React, { useEffect } from "react"
import { usePersonsStore } from "./store/persons.store"

export default function FormNewEditDeleteZustand() {

  const persons = usePersonsStore(state => state.persons)
  const person = usePersonsStore(state => state.person)
  const setPerson = usePersonsStore(state => state.setPerson)
  const name = usePersonsStore(state => state.name)
  const setName = usePersonsStore(state => state.setName)
  const lastName = usePersonsStore(state => state.lastName)
  const setLastName = usePersonsStore(state => state.setLastName)

  const handleSubmit = usePersonsStore(state => state.handleSubmit)
  const handleDelete = usePersonsStore(state => state.handleDelete)

  useEffect(() => {
    if(Object.keys(person).length > 0){
      setName(person.name as string)
      setLastName(person.lastName as string)
    }
  }, [person])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Write the name" className="text-black"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input type="string" placeholder="Write the last name" className="text-black"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input type="submit" value={person.id ? 'Edit': 'Add'} />
      </form>


      <div>
        <h2>Persons List: <hr /></h2>

        {persons.map((person) => (
          <div key={person.id} className="flex justify-between">
            <p>{person.name} {person.lastName}</p>
            <div>
              <button onClick={() => setPerson(person)}>Edit</button>
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}