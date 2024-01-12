// import CarsdSeller from "./CarsdSeller";

import CarsdSeller from "./CarsdSeller"

export default function CardStore({store}) {
    const stores = [store]

    return (
        <>
            {stores.map(store => (
                <div key={store.id} className="border p-2">
                    <p>{store.city}</p>
                    <hr />
                    <div>
                        <p>Sellers:</p>
                        <div className="flex flex-col gap-y-5">
                            <CarsdSeller
                                sellers={store.sellers}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}