import CardSale from "./CardSale";

export default function CarsdSeller({sellers}) {

    return (
        <>
            {sellers.map(seller => (
                <div key={seller.id} className="border p-2">
                    <p>{seller.name}</p>
                    <p>Sales:</p>
                    <div className="flex flex-col gap-y-3">
                        <CardSale
                            sales={seller.sales}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}