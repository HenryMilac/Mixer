import axios from "axios"

export const AxiosInterceptor = () => {
    axios.interceptors.request.use(request => {
        // console.log('Starting Request!', request)
        return request
    })
}
