import React from 'react';
import CardSeller from "./CardSeller";

export default function CardStore({stores}:any) {

    return (
        <>
            {stores.map(store => (
                <div key={store.id} className="border p-2">
                    <p>{store.city}</p>
                    <hr />
                    <p>Sellers:</p>
                    <div className="flex flex-col gap-y-2">
                        <CardSeller
                            sellers={store.sellers}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}