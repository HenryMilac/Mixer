import { I18nextProvider } from 'react-i18next';
import global_en from './src/translations/en/global.json';
import global_es from './src/translations/es/global.json';
import i18next from 'i18next';
import Text from './src/components/Text';
import ButtonTranslate from './src/components/ButtonTranslate';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',                              // language to use
    resources: {
        en: {
            global: global_en               // 'common' is our custom namespace
        },
        es: {
            global: global_es
        },
    },
});

export default function  Reacti18next() {
    return (
        <I18nextProvider i18n={i18next}>
            <div className="flex flex-col gap-y-10 p-10 max-w-3xl mx-auto">
                <Text/>
                <ButtonTranslate/>
            </div>
        </I18nextProvider>
    )
}