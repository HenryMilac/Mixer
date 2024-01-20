import { useEffect } from "react"
import { useFetchPosts } from "./store/fetchPosts.store"


export default function Trial() {
    const posts = useFetchPosts(state => state.posts)
    const getPosts = useFetchPosts(state => state.getPosts)
    const clearPosts = useFetchPosts(state => state.clearPosts)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="flex flex-col gap-y-5">
            <div className="flex gap-x-5">
                <p>Posts:</p>
                <button onClick={clearPosts}>Clear Posts</button>

            </div>
            <hr />
            {posts.map(post => (
                <div key={post.id} className="border border-white p-2">        
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            ))}            
        </div>
    )
}