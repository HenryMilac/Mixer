import { useTranslation } from "react-i18next";

export default function Text() {

    const [t] = useTranslation('global');
    const products = t("information.products", { returnObjects: true }) as Array<any>;

    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">{t("information.company")}!</p>
            {products.map((product: any) => {


                return(
                    <div key={product.id} className="flex flex-col items-center">
                        <p className="text-2xl font-bold">{product.name}</p>
                        {product.colors.map((color: string) => (
                            <p key={color}>{color} </p>
                        ))}
                    </div>
                )
            })}
        </div>
    )
}