import BtnSocialMediaBlue from "./components/BtnSocialMediaBlue";
import BtnSocialMediaYellow from "./components/BtnSocialMediaYellow";

export default function ReuseComponent() {
    return (
        <div>
            <h1>List of buttons <hr /></h1>

            <div>
                <BtnSocialMediaBlue path="https://facebook.com/" text="Facebook"/>
                <BtnSocialMediaBlue path="https://instagram.com/" text="Instagram"/>
                <BtnSocialMediaBlue path="https://tiktok.com/" text="Tiktok"/>
            </div>
            <div>
                <BtnSocialMediaYellow path="https://facebook.com/" text="Facebook"/>
                <BtnSocialMediaYellow path="https://instagram.com/" text="Instagram"/>
                <BtnSocialMediaYellow path="https://tiktok.com/" text="Tiktok"/>
            </div>
        </div>
    )
}






// El objetivo es reutilizar un mismo componente, solo le estamos pasando como props el path y text