import { useEffect } from "react"
import { useFetchPosts } from "./stores/fetchPosts.store"

export default function Trial() {
    const posts = useFetchPosts(state => state.posts)
    const getPosts = useFetchPosts(state => state.getPosts)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="flex flex-col gap-y-5">
            {posts.map(post => (
                <div className="border border-white p-2">        
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            ))}            
        </div>
    )
}