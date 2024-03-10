import React from "react";
import { Link } from "react-router-dom";

export default function BtnSocialMediaYellow({path, text}) {
    return (
        <button className="border p-2 bg-yellow-100 text-gray-800 font-bold mr-3">
            <Link to={path}>{text}</Link>
        </button>
    )
}