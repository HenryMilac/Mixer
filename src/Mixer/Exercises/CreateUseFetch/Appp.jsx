import { useFetch } from "./useFetch"

function Appp() {

    const {data} = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
            <p>Fetching!</p>
            <hr />
            {data?.map(person => (
                <p key={person.id}>{person.name}</p>
            ))}
        </div>
    )
}

export default Appp