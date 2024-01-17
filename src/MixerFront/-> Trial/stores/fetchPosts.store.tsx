import { create } from "zustand"

export const useFetchPosts = create((set) => ({
    posts: [],
    getPosts: async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => set({ posts: data }))
    }
}))