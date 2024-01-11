import i18next from 'i18next';
// Translate files JSON
import global_en from './src/translations/en/global.json';
import BtnTranslate from "./src/components/BtnTranslate";
// Components
import CardProduct from "./src/components/CardProduct";
import global_es from './src/translations/es/global.json';
import { useTranslation } from 'react-i18next';


i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
        en: {
            global: global_en
        },
        es: {
            global: global_es
        },
    },
});





export default function App() {

    const [t] = useTranslation('global');

    const productsData = t("dataInformation", {returnObjects: true})

    

    return (
        <div className="p-5 relative pb-24 max-w-2xl mx-auto">
            <div className="mb-7 border-b border-gray-300">
                <p className="text-2xl font-bold">{t("titleApp")}:</p>
            </div>
            
            <div className="flex flex-col gap-y-5">
                {productsData.map( productData => (
                    <CardProduct key={productData.id}
                        productData={productData}
                    />
                ))}
            </div>

            <BtnTranslate/>
        </div>
    )
}