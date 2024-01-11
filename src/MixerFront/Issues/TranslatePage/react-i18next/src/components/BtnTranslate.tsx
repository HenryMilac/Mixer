import { useTranslation } from "react-i18next";
import i18next from "i18next";




export default function BtnTranslate() {
    const translate = () => {
        i18next.changeLanguage(i18next.language === 'en' ? 'es' : 'en');
    }
    
    const [t] = useTranslation('global');



    return (
        <button onClick={translate} className="border border-gray-300 px-5 py-1 absolute bottom-5 right-5">
            {t('buttonTranslate')}
        </button>
    )
}