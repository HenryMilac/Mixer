import React from 'react';
import CardSell from "./CardSell";

export default function CardSeller({sellers}:any){

    return (
        <>
            {sellers.map(seller => (
                <div key={seller.id} className="border p-2">
                    <p>Seller: {seller.name}</p>
                    <p>Sells:</p>
                    <div className="flex flex-col gap-y-2">
                        <CardSell
                            sells={seller.sales}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}