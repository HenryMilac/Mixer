import BtnTranslate from "./src/components/BtnTranslate";
import ClientCard from "./src/components/ClientCard";




export default function Z() {
    return(
        <div className="p-5 relative pb-32">
            <p className="text-2xl font-bold mb-5 text-green-700">Clientes:</p>
            <div className="flex flex-col gap-y-10">
                <ClientCard/>
            </div>

            <div className="absolute bottom-5 right-5">
                <BtnTranslate/>
            </div>
        </div>
    )
}