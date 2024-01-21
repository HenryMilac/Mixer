import { useProductsStore } from "./store/products.store"

export default function Trial() {
  
  const products = useProductsStore(state => state.products)

  return (
    <div>
      <div>
        <h1>Products:</h1>      
        <hr />

        {products.map(product => (
          <div key={product.id} className="flex justify-between">
            <p>{product.name}: {product.units} units.</p>
            <div>
              <button>Rest</button>
              <button>Plus</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}