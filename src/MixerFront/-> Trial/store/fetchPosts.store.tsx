import { create } from "zustand"

interface FetchPostsStore {
    posts: any[],
    getPosts: () => Promise<void>,
    clearPosts: () => void
}

export const useFetchPosts = create<FetchPostsStore>((set) => ({
    posts: [],
    getPosts: async () => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => set({ posts: data }))
    },
    clearPosts: () => set({ posts: [] })
}))