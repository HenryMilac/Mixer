import CardColor from "./CardColor";

export default function CardSale({sales}:any) {
    return (
        <>
            {sales.map((sale:any) => (
                <div key={sale.id} className="border p-2">
                    <div>
                        <p>{sale.dateTitle}: {sale.date}</p>
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <CardColor
                            colors={sale.colorsUnits}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}