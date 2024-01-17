import { useShallow } from "zustand/react/shallow"
import { useProductsStore } from "./store/products.store"

export default function ZustandFernandoHerrera() {

    const products = useProductsStore(useShallow(state => state.products))
    const countProduct1 = useProductsStore(state => state.countProduct1)
    const countProduct2 = useProductsStore(state => state.countProduct2)
    const totalProducts = useProductsStore(state => state.totalProducts.totalProductsCount)
    const plusCountProduct1 = useProductsStore(state => state.plusCountProduct1)
    const restCountProduct1 = useProductsStore(state => state.restCountProduct1)
    const plusCountProduct2 = useProductsStore(state => state.plusCountProduct2)
    const restCountProduct2 = useProductsStore(state => state.restCountProduct2)
    const doNothing = useProductsStore(state => state.doNothing)
    const clearProducts = useProductsStore(state => state.clearProducts)
    const addProduct = useProductsStore(state => state.addProduct)


    


    return (
        <div className="p-5 flex flex-col gap-10">
            <div>
                <h1 className="text-xl text-red-600">Section 01:</h1>
                <hr />
            </div>



            <div>
                <p>Update state function:</p>
                <hr/>
                <div className="flex justify-between">
                    <p>Product 01: {countProduct1} units</p>
                    <div>
                        <button onClick={restCountProduct1}>Rest</button>
                        <button onClick={plusCountProduct1}>Plus</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <p>Product 02: {countProduct2} units</p>
                    <div>
                        <button onClick={restCountProduct2}>Rest</button>
                        <button onClick={plusCountProduct2}>Plus</button>
                    </div>
                </div>
            </div>



            <div>
                <p>Total Products:</p>
                <hr />
                <p>Counter: {totalProducts}</p>
            </div>



            <div>
                <p>Buttons:</p>
                <hr/>
                <div className="flex justify-around">
                    <button onClick={doNothing}>Do nothing</button>
                    <button onClick={clearProducts}>Clear Products</button>
                    <button onClick={addProduct}>Add Product</button>
                </div>
            </div>



            <div>
                <p>Products (Map from array):</p>
                <hr/>
                {products.map(product => (
                    <p key={product.id}>{product.name}</p>
                ))}
            </div>
        </div>
    )
}