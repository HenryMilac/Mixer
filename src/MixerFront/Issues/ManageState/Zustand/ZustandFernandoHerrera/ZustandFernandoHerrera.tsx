import { useShallow } from "zustand/react/shallow"
import { count } from "./store/products.store"

export default function ZustandFernandoHerrera() {

    const Products = count(useShallow(state => state.products))
    const CountProduct1 = count(state => state.countProduct1)
    const CountProduct2 = count(state => state.countProduct2)
    const TotalProducts = count(state => state.totalProducts.totalProductsCount)
    const PlusCountProduct1 = count(state => state.plusCountProduct1)
    const RestCountProduct1 = count(state => state.restCountProduct1)
    const PlusCountProduct2 = count(state => state.plusCountProduct2)
    const RestCountProduct2 = count(state => state.restCountProduct2)
    const DoNothing = count(state => state.doNothing)
    const ClearProducts = count(state => state.clearProducts)
    const AddProduct = count(state => state.addProduct)

    return (
        <div className="p-5 flex flex-col gap-20">





            
            {/* ---------- Section 01 */}
            {/* <div className="flex flex-col gap-10">
                <div>
                    <h1 className="text-xl text-red-600">Section 01:</h1>
                    <hr />
                </div>
                
                <div>
                    <p>Update state function:</p>
                    <hr/>
                    <div className="flex justify-between">
                        <p>Product 01: {CountProduct1} units</p>
                        <div>
                            <button onClick={RestCountProduct1}>Rest</button>
                            <button onClick={PlusCountProduct1}>Plus</button>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p>Product 02: {CountProduct2} units</p>
                        <div>
                            <button onClick={RestCountProduct2}>Rest</button>
                            <button onClick={PlusCountProduct2}>Plus</button>
                        </div>
                    </div>
                </div>



                <div>
                    <p>Total Products:</p>
                    <hr />
                    <p>Counter: {TotalProducts}</p>
                </div>

                <div>
                    <p>Buttons:</p>
                    <hr/>
                    <div className="flex justify-around">
                        <button onClick={DoNothing}>Do nothing</button>
                        <button onClick={ClearProducts}>Clear Products</button>
                        <button onClick={AddProduct}>Add Product</button>
                    </div>
                </div>



                <div>
                    <p>Products (Map from array):</p>
                    <hr/>
                    {Products.map(product => (
                        <p key={product.id}>{product.name}</p>
                    ))}
                </div>
            </div> */}







            {/* ---------- Section 02 */}
            <div>
                <div>
                    <h1 className="text-xl text-red-600">Section 02:</h1>
                    <hr />
                </div>

                <div>
                    
                </div>
            </div>






            {/* ---------- Section 02 */}
        </div>
    )
}