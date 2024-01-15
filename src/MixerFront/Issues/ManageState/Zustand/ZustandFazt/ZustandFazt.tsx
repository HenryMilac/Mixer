import { useUsersStore } from "./src/store/users.store"
import { useEffect } from "react"

export default function ZustandFazt() {

    const {getPosts} = useUsersStore()
    const {posts} = useUsersStore(state => {
        return {
            posts: state.posts
        }
    })
    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="p-5">
            <h1>Mapping:</h1>
            <hr/>
            
            <div className="mt-5">
                {posts.map(post => (
                    <div key={post.id} className="border border-white p-2 mt-5">
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}