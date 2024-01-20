import { create } from "zustand";

interface PostsStore {
    posts: any[];
    fetchPosts: () => void;
    clearPosts: () => void;
}

export const postsStore = create<PostsStore>((set) => ({
    posts: [],
    fetchPosts: () => fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then(data => set(state => ({ ...state, posts: data }))),
    clearPosts: () => set(state => ({ ...state, posts: []}))
}))