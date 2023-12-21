import { Products } from "./store/products.store"

export default function ZustandMe() {
    const products = Products(state => state.products)

    return (
        <div className="p-5">




            <div>
                <h1 className="text-xl text-red-600">First Exercise</h1>
                <hr />
                <div>
                    {/* ----- Buttons */}
                    <div className="flex justify-around py-5">
                        <button className="border border-gray-300 p-2 rounded-md">Do Nothing</button>
                        <button className="border border-gray-300 p-2 rounded-md">Clear Products</button>
                        <button className="border border-gray-300 p-2 rounded-md">Add Product</button>
                    </div>

                    {/* ----- Total */}
                    <div className="py-5">
                        <p className="text-base font-bold">Total products: <span className="font-normal"> units.</span></p>
                    </div>

                    {/* ----- Products */}
                    {products.map(product => (
                        <div className="flex justify-between">
                            <div className="flex gap-x-10">
                                <li>Count: {product.count} units.</li>
                                <p>Product: {product.name}</p>
                            </div>
                            <div className="flex gap-x-5">
                                <button onClick={product.decreaseCount}>Rest</button>
                                <button onClick={product.increaseCount}>Plus</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>






            <div>
                <h1 className="text-xl text-red-600 mt-20">Second Exercise</h1>
                <hr />
            </div>
        </div>
    )
}