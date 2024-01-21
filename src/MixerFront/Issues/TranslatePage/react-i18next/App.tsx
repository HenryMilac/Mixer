import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
// Translate files JSON
import global_en from './src/translations/en/global.json';
import global_es from './src/translations/es/global.json';
// Components
import BtnTranslate from "./src/components/BtnTranslate";
import CardProduct from './src/components/CardProduct';




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
    const productsData = t("dataProducts", {returnObjects: true})
    // console.log(productsData)
    return (
        <div className='p-5'>
            <div className='mb-5'>
                <p>{t("titleApp")}</p>
                <hr />
            </div>

            <div className='flex flex-col gap-y-5'>
                {productsData.map(product => (
                    <CardProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <BtnTranslate/>
        </div>
    )
}