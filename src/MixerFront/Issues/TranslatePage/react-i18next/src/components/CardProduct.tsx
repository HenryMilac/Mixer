import { useTranslation } from "react-i18next";
import CardSale from "./CardSale";

export default function CardProduct() {

    const [t] = useTranslation('global');
    const productsData = t("dataInformation", {returnObjects: true})

  

    return (
        <div className="border border-gray-300 p-3 rounded-lg">
            <div className="flex justify-between items-center border-b border-gray-300">
                <p className="text-xl font-bold">{productsData.nameProduct}</p>
                <p>{productsData.categoryProduct}</p>
            </div>
            <p className="text-base font-bold mb-2">{productsData.salesTitle}</p>

            <div className="flex flex-col gap-y-2">
                {productsData.map( saleData => 
                    <CardSale/>
                )}
            </div>
        </div>
    )
}