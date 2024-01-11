import Stores from './src/components/Stores'
import dataBase from './src/data.json'

export default function FetchFromJSON() {

    return(
        <div>
            <p className='p-4'>{dataBase.title}</p>
            <hr />

            <div className='my-2 p-4'>
                <p>Stores:</p>
                <Stores/>
            </div>
        </div>

    )
}