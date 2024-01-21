import { create } from "zustand";

interface PostsStore {
    posts: any[];
    fetchPosts: () => void;
    clearPosts: () => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    fetchPosts: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => set({posts: data}))
    },
    clearPosts: () => set({posts: []})
}))