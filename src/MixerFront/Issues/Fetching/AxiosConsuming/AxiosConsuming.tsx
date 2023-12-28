import { useEffect, useState } from "react"
import { AxiosInterceptor } from "./interceptors/axios.interceptor"
import { testingService } from "./services/testing.service"

AxiosInterceptor()

export default function AxiosConsuming() {
    const [morty, setMorty] = useState({} as any)
    const fetchMorty = async () => {
        const {data} = await testingService()
        setMorty(data)
    }


    useEffect(() => {
        try {
            fetchMorty()
        } catch(error){
            console.log(error)
        }
    }, [])

    console.log('https://s11-06-n-node-react-back.onrender.com/documentation/news')

    return (
        <div>
            {JSON.stringify(morty)}
        </div>
    )
}
