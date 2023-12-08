import { create } from "zustand"

export const datos = create((set) => {
    return {
        posts: [],
        getPosts: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await res.json()
            set(state => {
                return {...state, posts}
            })
        }
    }
})