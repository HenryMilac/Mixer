
import Products from './Products';

export default function Sellers({cardCity}) {
    const sellers = cardCity.sellers
    // console.log(sellers)
    return (
        <div>
            {sellers.map(cardSeller => {
                return(
                    <div key={cardSeller.id} className='border m-4 p-2'>
                        <p>{cardSeller.name}</p>
                        <p>Sales:</p>
                        <Products
                            cardSeller={cardSeller}
                        />
                    </div>
                )
            })}
        </div>
    )
}