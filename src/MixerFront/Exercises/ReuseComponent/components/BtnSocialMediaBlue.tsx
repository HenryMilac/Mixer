import { Link } from "react-router-dom";

export default function BtnSocialMediaBlue({path, text}) {
    return (
        <button className="border p-2 bg-blue-200 text-gray-800 font-bold mr-3">
            <Link to={path}>{text}</Link>
        </button>
    )
}