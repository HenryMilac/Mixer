import BtnTranslate from "./src/components/BtnTranslate";
import CardProduct from "./src/components/CardProduct";

export default function App() {
    return (
        <div className="p-5 relative pb-24 max-w-2xl mx-auto">
            <div className="mb-7 border-b border-gray-300">
                <p className="text-2xl font-bold">Products:</p>
            </div>
            
            <div className="flex flex-col gap-y-5">
                <CardProduct/>
                <CardProduct/>
                <CardProduct/>
            </div>

            <BtnTranslate/>
        </div>
    )
}