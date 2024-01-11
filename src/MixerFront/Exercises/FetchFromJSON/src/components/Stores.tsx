import dataBase from '../data.json'
import Sellers from './Sellers'

export default function Stores() {
    const stores = dataBase.stores
    // console.log(stores)
    return (
        <div>
            {stores.map(cardCity => {
                return(
                    <div key={cardCity.id} className='border my-8 p-2'>
                        <p>{cardCity.city}</p>
                        <p>Sellers:</p>
                        <Sellers
                            cardCity={cardCity}
                        />
                    </div>
                )
            })}
        </div>
    )
}