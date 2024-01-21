import CardSale from "./CardSale";

export default function CardProduct({product}:any) {
    // console.log(product.sales)
    return (
        <div className="border p-2">
            <div className="flex justify-between">
                <p>{product.titleProduct}: {product.nameProduct}</p>
                <p>{product.categoryProduct}</p>
            </div>
            <div>
                <p>{product.salesTitle}:</p>

                <div className="flex flex-col gap-y-2">
                    <CardSale 
                        sales={product.sales}
                    />
                </div>
            </div>
        </div>
    )
}