import { useTranslation } from "react-i18next";

export default function ButtonTranslate() {

    const [t, i18n] = useTranslation('global');
    const translate = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    }

    return (
        <button onClick={translate} className="mx-auto w-full border border-gray-400">
            {t("button")}
        </button>
    )
}