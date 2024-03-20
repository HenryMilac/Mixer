import React from "react";
import CardStore from "./src/components/CardStore";
import dataBase from './src/data.json';

export default function ExlFetchFromJSON() {
    return (
        <div className="p-5">
            <div className="mb-5">
                <p>{dataBase.title} - Stores:</p>
                <hr />
            </div>

            <div className="flex flex-col gap-y-5">
                <CardStore
                    stores={dataBase.stores}
                />
            </div>
        </div>
    )
}