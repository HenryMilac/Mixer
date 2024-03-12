import React from 'react';

export default function CardSell({sells}:any) {

    return (
        <>
            {sells.map(sell => (
                <p key={sell.id} className="border p-2">{sell.product}</p>
            ))}
        </>
    )
}