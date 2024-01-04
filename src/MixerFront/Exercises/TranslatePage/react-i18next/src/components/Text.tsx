import { useTranslation } from "react-i18next";

export default function Text() {

    const [t, i18n] = useTranslation('global');

    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">Hola {t("information.name")}!</p>            
            <p className="text-center">Esta página está siendo probada para traducir una página a otro idioma usando npm next-i18next, y está en el idioma: <span className="text-red-500 font-bold">{t("information.language")}</span></p>
        </div>
    )
}