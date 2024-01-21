import { create } from "zustand";

interface PostsStore  {
    posts: any[];
    getPosts: () => void;
    clearProducts: () => void;
}


export const usePostsStore = create<PostsStore>((set) => ({
    posts: [],
    getPosts: () => fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => set({posts: data})),
    clearProducts: () => set({posts: []})
}))