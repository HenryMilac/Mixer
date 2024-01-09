import CardSale from "./CardSale";

export default function CardProduct() {
    return (
        <div className="border border-gray-300 p-3 rounded-lg">
            <div className="flex justify-between items-center border-b border-gray-300">
                <p className="text-xl font-bold">Ball</p>
                <p>Toys</p>
            </div>
            <p className="text-base font-bold mb-2">Sales:</p>

            <div className="flex flex-col gap-y-2"> 
                <CardSale/>    
                <CardSale/>    
                <CardSale/>
            </div>
        </div>
    )
}