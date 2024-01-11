export default function Products({cardSeller}) {
    const sales = cardSeller.sales

    return (
        <div>
            {sales.map(cardSale => {
                return(
                    <p key={cardSale.id} className='border m-4 p-2'>{cardSale.product}</p>
                )
            })}
        </div>
    )
}