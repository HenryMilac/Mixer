import { create } from "zustand";

interface PostsStore {
    posts: any[];
    getPosts: () => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    getPosts: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => set({ posts: data}))
    }
}))