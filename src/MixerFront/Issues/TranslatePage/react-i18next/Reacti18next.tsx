import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";



export default function Reacti18next() {
    return (
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    )
}


// Remind! this wrap, it will be used in the root component (index.html), for example