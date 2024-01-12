import CardStore from "./components/CardStore";
import dataBase from './data.json'

export default function Z() {

    const dataStores = dataBase.stores;

    return (
        <div className="p-5">
            <div className="mb-5">
                <p>{dataBase.title} - Stores:</p>           
                <hr />
            </div>

            <div className="flex flex-col gap-y-5">
                {dataStores.map(store => (
                    <CardStore
                        key={store.id}
                        store={store}
                    />               
                ))}
            </div>
        </div>
    )
}