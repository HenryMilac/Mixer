export default function CardSale({sales}) {

    return (
        <>
            {sales.map(sale => (
                <div key={sale.id} className="border p-2">
                    <p>{sale.product}</p>
                </div>
            ))}
        </>
    )
}