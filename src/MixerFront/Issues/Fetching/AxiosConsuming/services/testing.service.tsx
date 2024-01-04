import axios from "axios"

export const testingService = () => {
    return axios.get("https://rickandmortyapi.com/api/character/1")
    // return axios.get("https://s11-06-n-node-react-back.onrender.com/documentation")
}
