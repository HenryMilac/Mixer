import { count } from "./store/notes.store"


export default function ZustandFernandoHerrera() {

    const Products = count(state => state.products)
    const CountProduct1 = count(state => state.countProduct1)
    const CountProduct2 = count(state => state.countProduct2)
    const PlusCountProduct1 = count(state => state.plusCountProduct1)
    const RestCountProduct1 = count(state => state.restCountProduct1)
    const PlusCountProduct2 = count(state => state.plusCountProduct2)
    const RestCountProduct2 = count(state => state.restCountProduct2)

    return (
        <div className="p-5 flex flex-col gap-10">
            <div>
                <p>Products (Map from array):</p>
                <hr/>
                {Products.map(product => (
                    <p>{product.name}</p>
                ))}
            </div>


            <div>
                <p>Update state function:</p>
                <hr/>
                <div className="flex justify-between">
                    <p>Product 01: {CountProduct1}</p>
                    <div>
                        <button onClick={RestCountProduct1}>Rest</button>
                        <button onClick={PlusCountProduct1}>Plus</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Product 02: {CountProduct2}</p>
                    <div>
                        <button onClick={RestCountProduct2}>Rest</button>
                        <button onClick={PlusCountProduct2}>Plus</button>
                    </div>
                </div>
            </div>


            <div>
                <p>Buttons:</p>
                <hr />
                <button>Do nothing</button>
                <button></button>
                <button>Clean</button>
            </div>

        </div>
    )
}